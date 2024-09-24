import { stripe } from "../../stripe.js"
import { env } from "$env/dynamic/private"

export const POST = async ({ request }) => {
    const data = await request.json()
    const RORitems = data.items
    const allItems = RORitems.map((item) => {
        return {
            price_data: {
                currency: "PHP",
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
        customer_email: RORitems[0].email,
        line_items: allItems,
        mode: "payment",
        success_url: env.BASE + "/success",
        cancel_url: env.BASE + "/cancel"
        
    })

    return new Response(JSON.stringify({ url: session.url }), { status: 200, headers: {
        "Content-Type": "application/json"
    }})
}