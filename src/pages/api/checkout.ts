import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";

export default async function headler(req: NextApiRequest, res: NextApiResponse) {
    const success_url = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
    const cancel_url = `${process.env.NEXT_URL}/`;

    const { lineItemsPriceId }  = req.body

    console.log(lineItemsPriceId)
    console.log('console do priceId')

    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed." });
      }
    
      if (!lineItemsPriceId) {
        return res.status(400).json({ error: 'Price not found.' });
      }

    const checkoutSessions = await stripe.checkout.sessions.create({
        success_url: success_url,
        cancel_url: cancel_url,
        mode: "payment",
        line_items: lineItemsPriceId
    })

    return res.status(200).json({
        checkoutUrl: checkoutSessions.url
    })
}