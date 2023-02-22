import { useRouter } from "next/router";
import styled from "styled-components";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import { getSession } from "@auth0/nextjs-auth0";

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


const Profile = ({ orders }) => {
  const { user, error, isLoading } = useUser();
  const router = useRouter();

  const logOut = () => {
    router.push("/api/auth/logout");
  };


  console.log(orders);

  console.log(user);
  return (
    <div>
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
          <div>
            <h2>Orders</h2>
            <ul>
            {orders.map((order) => (
              <li key={order.id}>
                <p>Order number: {order.id}</p>
                <p>{order.amount}</p>
                <p>Created the {order.created}</p>
                <p>Current Status{order.status}</p>
                <p>Receipt email: {order.receipt_email}</p>
              </li>
            ))}
          </ul>
          </div>
          <button onClick={logOut}>Logout</button>
        </div>
      )}
    </div>
  );
};

// export default Profile;

export default withPageAuthRequired(Profile, {
  onRedirecting: () => <div>Loading...</div>,
  onError: (err) => <div>{err.message}</div>,
});

