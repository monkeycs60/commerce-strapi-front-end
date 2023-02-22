import { useRouter } from "next/router";
import { ProfileStyle } from "@/styles/ProfileStyle";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import { getSession } from "@auth0/nextjs-auth0";
import formatMoney from "@/lib/formatMoney";
import BillingHistory from "@/components/BillingHistory";


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


const Profile = ({ orders }) => {
  const { user, error, isLoading } = useUser();
  const router = useRouter();

  const logOut = () => {
    router.push("/api/auth/logout");
  };

  console.log(user);
  return (
    <ProfileStyle>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error.message}</div>}
      {user && (
        <div>
          <h1>Profile</h1>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.sub}</p>
          <img src={user.picture} alt={user.name} />

          <p>{user.nickname}</p>
          <BillingHistory 
            orders={orders}
          />
          <button onClick={logOut}>Logout</button>
        </div>
      )}
    </ProfileStyle>
  );
};


export default withPageAuthRequired(Profile, {
  onRedirecting: () => <div>Loading...</div>,
  onError: (err) => <div>{err.message}</div>,
});
