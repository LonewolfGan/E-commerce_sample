import { toast } from "react-toastify";
import { useTitle } from "../../hooks/useTitle";
import { getUserOrders } from "../../services";
import { DashbaordCard } from "./components/DashboardCard";
import { DashbaordEmpty } from "./components/DashboardEmpty";
import { useState, useEffect } from "react";

export const DashboardPage = () => {
  const [orders, setOrders] = useState([]);

  useTitle("Dashboard");
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await getUserOrders();
        setOrders(data);
      } catch (error) {
        toast.error("Failed to fetch", { closeButton: true });
      }
    };
    fetchOrders();
  }, []);

  return (
    <main>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">
          My Dashboard
        </p>
      </section>

      <section>
        {orders.length &&
          orders.map((order) => <DashbaordCard key={order.id} order={order} />)}
      </section>

      <section>{!orders.length && <DashbaordEmpty />}</section>
    </main>
  );
};
