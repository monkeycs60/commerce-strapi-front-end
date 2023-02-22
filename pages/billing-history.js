import formatMoney from "@/lib/formatMoney";
import BillingHistory from "@/components/BillingHistory";
import { getSession } from "@auth0/nextjs-auth0";

const stripe = require("stripe")(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx.req, ctx.res);
  const stripeId = session.user[`${process.env.BASE_URL}/stripe_customer_id`];
  const paymentIntents = await stripe.paymentIntents.list({
    customer: stripeId,
    limit: 100,
  });
  console.log(paymentIntents);
  return {
    props: {
      orders: paymentIntents.data,
    },
  };
}

const BillingHistoryPage = ({ orders }) => {
  return (
    <div>
      <BillingHistory orders={orders} />
    </div>
  );
};

export default BillingHistoryPage;
