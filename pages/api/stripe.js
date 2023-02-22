import Stripe from "stripe";
import { getSession } from "@auth0/nextjs-auth0";
const stripe = new Stripe(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`);

export default async function handler(req, res) {
  const session = await getSession(req, res);
  console.log(session + "ceci est la session");
  const user = session?.user;
  if (user) {
    const stripeId = user["http://localhost:3000/stripe_customer_id"];
    if (req.method === "POST") {
      try {
        const session = await stripe.checkout.sessions.create({
          submit_type: "pay",
          mode: "payment",
          customer: stripeId,
          payment_intent_data: {
            setup_future_usage: "off_session",
          },
          payment_method_types: ["card"],
          shipping_address_collection: {
            allowed_countries: ["US", "CA", "GB", "FR", "DE", "IT", "ES"],
          },
          allow_promotion_codes: true,
          shipping_options: [
            {
              shipping_rate: "shr_1MdbeEE0FQfFgVLx3pKJeKCY",
            },
            {
              shipping_rate: "shr_1MdbohE0FQfFgVLxS69NJuRe",
            },
          ],
          line_items: req.body.map((item) => ({
            price_data: {
              currency: "usd",
              product_data: {
                name: item.product.title,
                images: [
                  item.product.image.data.attributes.formats.thumbnail.url,
                ],
              },
              unit_amount: item.product.price * 100,
            },
            quantity: item.quantity,
            adjustable_quantity: {
              enabled: true,
            },
          })),
          success_url: `${req.headers.origin}/success?&session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${req.headers.origin}/canceled`,
        });
        res.status(200).json(session);
      } catch (error) {
        res.status(error.statusCode || 500).json(error.message);
      }
    }
  } else {
    if (req.method === "POST") {
      try {
        const session = await stripe.checkout.sessions.create({
          submit_type: "pay",
          mode: "payment",
          payment_intent_data: {
            setup_future_usage: "off_session",
          },
          payment_method_types: ["card"],
          shipping_address_collection: {
            allowed_countries: ["US", "CA", "GB", "FR", "DE", "IT", "ES"],
          },
          allow_promotion_codes: true,
          shipping_options: [
            {
              shipping_rate: "shr_1MdbeEE0FQfFgVLx3pKJeKCY",
            },
            {
              shipping_rate: "shr_1MdbohE0FQfFgVLxS69NJuRe",
            },
          ],
          line_items: req.body.map((item) => ({
            price_data: {
              currency: "usd",
              product_data: {
                name: item.product.title,
                images: [
                  item.product.image.data.attributes.formats.thumbnail.url,
                ],
              },
              unit_amount: item.product.price * 100,
            },
            quantity: item.quantity,
            adjustable_quantity: {
              enabled: true,
            },
          })),
          success_url: `${req.headers.origin}/success?&session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${req.headers.origin}/canceled`,
        });
        res.status(200).json(session);
      } catch (error) {
        res.status(error.statusCode || 500).json(error.message);
      }
    }
  }
}
