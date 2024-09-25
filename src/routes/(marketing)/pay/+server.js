import { supabase } from "$lib/supabaseClient";
import { stripe } from "../../stripe.js"
import { env } from "$env/dynamic/private"

export const POST = async ({ request }) => {
    const data = await request.json()
    const Info = data.info
    const firstName = Info.name
    const email = Info.email
    const {insertData, insertError } = await supabase.from('users').insert([
        { firstName: firstName, email: email, address: "", referralCount: 0 },
    ]).select()
    if(insertError) {
        console.log("Unable to add user to database")
    }
    const allItems = Info.map((item) => {
        return {
            price_data: {
                currency: item.currency,
                product_data: {
                    name: item.category,
                    images: [],
                },
                unit_amount: item.price * 100,
            },
            quantity: item.quantity,
        }
    })

    const session = await stripe.checkout.sessions.create({
        customer_email: Info[0].email,
        line_items: allItems,
        mode: "payment",
        success_url: "https://reachout-sliv.vercel.app/success",
        cancel_url:  "https://reachout-sliv.vercel.app/cancel"
        
    })

    return new Response(JSON.stringify({ url: session.url }), { status: 200, headers: {
        "Content-Type": "application/json"
    }})
}