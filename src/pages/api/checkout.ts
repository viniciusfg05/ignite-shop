import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";

export default async function headler(req: NextApiRequest, res: NextApiResponse) {
    const success_url = `${process.env.NEXT_URL}/success`;
    const cancel_url = `${process.env.NEXT_URL}/`;

    const { priceId } = req.body

    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed." });
      }
    
      if (!priceId) {
        return res.status(400).json({ error: 'Price not found.' });
      }

    const checkoutSessions = await stripe.checkout.sessions.create({
        success_url: success_url,
        cancel_url: cancel_url,
        mode: "payment",
        line_items: [
            {
                price: priceId,
                quantity: 1,

            }
        ]
    })

    return res.status(200).json({
        checkoutUrl: checkoutSessions.url
    })
}