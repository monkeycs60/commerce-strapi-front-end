import { useRouter } from "next/router";
import Image from "next/image";
import mimi from "../public/mimmie-mathy.png";
import { SuccessStyles } from "@/styles/SuccessStyle";
import { useSelector } from "react-redux";
import formatMoney from "@/lib/formatMoney";

const stripe = require("stripe")(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export async function getServerSideProps(context) {
  const order = await stripe.checkout.sessions.retrieve(
    context.query.session_id,
    {
      expand: ["line_items", "shipping"],
    }
  );
  return {
    props: {
      order,
    },
  };
}

export default function Success({ order }) {
  const cart = useSelector((state) => state.cart);
  const router = useRouter();

  console.log(cart);
  console.log(order);

  return (
    <SuccessStyles
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1, transition: { duration: 0.75 } }}
    >
      <div className="main-info">
        <h1>Success</h1>
        <h2>Thank you for your purchase in the plantStore!</h2>
        <h3>You will receive an email confirmation shortly</h3>
        <h4>@------{order.customer_details.email}</h4>
      </div>
      <div className="buy-details">
        <div className="address">
          <h2>Adress info</h2>
          <ul>
            <li>{order.customer_details.name}</li>
            <li>{order.customer_details.address.line1} </li>
            <li>{order.customer_details.address.postal_code} </li>
            <li>{order.customer_details.address.city} </li>
          </ul>
        </div>
        <div className="order">
          <h2>Products info</h2>
          {order.line_items.data.map((item) => (
            <div key={item.id} className="order__infos">
              <div className="order__text">
                <h3>{item.description}</h3>
                <h4>Quantity: {item.quantity}</h4>
                <h4>Price: {formatMoney(item.amount_total)}</h4>
              </div>
              {cart.items.map((cartItem) => {
                if (item.description === cartItem.product.title) {
                  return (
                    <img
                      key={cartItem.id}
                      src={
                        cartItem.product.image.data.attributes.formats.thumbnail
                          .url
                      }
                      alt={cartItem.product.title}
                    />
                  );
                }
              })}
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={() => {
          router.push("/");
        }}
      >
        Continue Shopping
      </button>
      <Image src={mimi} alt="mimmie-mathy" width={200} height={200} />
    </SuccessStyles>
  );
}
