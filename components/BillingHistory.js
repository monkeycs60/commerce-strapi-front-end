import formatMoney from "@/lib/formatMoney";

const BillingHistory = ({ orders }) => {
  console.log(orders);
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

export default BillingHistory;
