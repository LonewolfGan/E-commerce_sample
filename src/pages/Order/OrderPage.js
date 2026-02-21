import { useTitle } from "../../hooks/useTitle";
import { OrderFail } from "./components/OrderFail";
import { OrderSuccess } from "./components/OrderSuccess";
import { useLocation } from "react-router";

export const OrderPage = () => {
  useTitle("Order Summary");
  const { state } = useLocation();
  const { status, user } = state;

  return (
    <main>
      {status ? <OrderSuccess user={user} /> : <OrderFail user={user} />}
    </main>
  );
};
