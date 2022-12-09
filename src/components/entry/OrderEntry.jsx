import Options from "@components/entry/Options";
import { formatCurrency } from "@app/utilities/index";
import { useOrderDetails } from "../../contexts/OrderDetails";

function OrderEntry() {
  const { totals } = useOrderDetails();

  return (
    <div>
      <h1>Design your Sundae!</h1>
      <Options optionType="scoops" />
      <Options optionType="toppings" />
      <h2>Grand total: {formatCurrency(totals.scoops + totals.toppings)}</h2>
    </div>
  );
}

export default OrderEntry;
