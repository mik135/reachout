import { supabase } from "$lib/supabaseClient";
import { fail } from "@sveltejs/kit"

export const actions = {
    create: async({ request }) => {
        const formData = await request.formData()
        const firstName = formData.get('firstName')
        const email = formData.get('email')
        const address = formData.get('address')
        const referralCount = formData.get('referralCount')
        const { data, error} = await supabase.from('users').select('email').eq('email', email)
        if(error) {
            console.error('Error checking email:', error);
            return fail(422, {
                error: "Error checking email"
            })
        }
        if(data.length > 0) {
            console.log('Email Found')
            const { id, errorRef } = await supabase.from('users').select('refID').eq('email', email).single()
            console.log(id)
            return {
                message: "Email already exists"
            }
        } else {
            const { data, error } = await supabase.from('users').insert([
                { firstName: firstName, email: email, address: address, referralCount: referralCount },
            ]).select()
            const { users, errorRef } = await supabase.from('users').select('refID', 'firstName').eq('email', email).single()
            console.log(users)

            if(error || errorRef) {
                return fail(422, {
                    error: "User cannot be added to database"
                })
            } else {
                return {
                    status: 200,
                    success: "User saved to database",
                    refID: id,
                    name: firstName
                }
            }
        }
    },
    do: async({ request }) => {
        const data = await request.formData()
        console.log(data)
        return {
            done: "Absolutely"
        }
    }
}
