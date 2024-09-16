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
            const { data: users, errorRef } = await supabase.from('users').select('refID', 'firstName').match({ email }).single();
            if(errorRef) {
                return fail(422, {
                    error: "Referral ID cannot be retrieved"
                })
            } else {
                return {
                    message: "Email already exists",
                    refID: users.refID
                }
            }
            
        } else {
            const {insertData, insertError } = await supabase.from('users').insert([
                { firstName: firstName, email: email, address: address, referralCount: referralCount },
            ]).select()
            const { data: users, errorRef } = await supabase.from('users').select('refID', 'firstName').match({ email }).single();

            if(insertError || errorRef) {
                return fail(422, {
                    error: "User cannot be added to database"
                })
            } else {
                return {
                    status: 200,
                    success: "User saved to database",
                    refID: users.refID,
                    name: firstName,
                    newInfo: insertData
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
