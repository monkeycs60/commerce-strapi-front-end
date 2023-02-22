import { getSession } from "@auth0/nextjs-auth0";
import formatMoney from "@/lib/formatMoney";

const stripe = require("stripe")(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx.req, ctx.res);
  const stripeId = session.user[`${process.env.BASE_URL}/stripe_customer_id`];
  const paymentIntents = await stripe.paymentIntents.list({
    customer: stripeId,
    limit: 100,
  });
  return {
    props: {
      orders: paymentIntents.data,
    },
  };
}

const BillingHistory = ({ orders }) => {
  return (
    <div>
      <h1>Billing History</h1>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            <p>Order number: {order.id}</p>
            <p>Price: {formatMoney(order.amount)}</p>
            <p>Created the {order.created}</p>
            <p>Current Status{order.status}</p>
            <p>Receipt email: {order.receipt_email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
