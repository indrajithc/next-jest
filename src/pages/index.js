import { useState } from "react";

import OrderEntry from "@app/components/entry/OrderEntry";
import OrderSummary from "@app/components/entry/OrderSummary";
import OrderConfirmation from "@app/components/confirmation/OrderConfirmation";

import { OrderDetailsProvider } from "@app/contexts/OrderDetails";

export default function Home() {
  // orderPhase needs to be 'inProgress', 'review' or 'completed'
  const [orderPhase, setOrderPhase] = useState("inProgress");

  let Component = OrderEntry; // default to order page
  switch (orderPhase) {
    case "inProgress":
      Component = OrderEntry;
      break;
    case "review":
      Component = OrderSummary;
      break;
    case "completed":
      Component = OrderConfirmation;
      break;
    default:
  }

  return (
    <div>
      <main>
        <h1 role="presentation">Welcome</h1>
        <OrderDetailsProvider>
          <Component setOrderPhase={setOrderPhase} />
        </OrderDetailsProvider>
      </main>
    </div>
  );
}
