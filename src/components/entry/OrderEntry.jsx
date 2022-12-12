import Options from "@components/entry/Options";
import { formatCurrency } from "@app/utilities/index";
import { Button } from "reactstrap";
import PropTypes from "prop-types";
import { useOrderDetails } from "../../contexts/OrderDetails";

function OrderEntry({ setOrderPhase }) {
  const { totals } = useOrderDetails();

  return (
    <div>
      <h1>Design your Sundae!</h1>
      <Options optionType="scoops" />
      <Options optionType="toppings" />
      <h2>Grand total: {formatCurrency(totals.scoops + totals.toppings)}</h2>
      <Button onClick={() => setOrderPhase("review")}>Order Sundae!</Button>
    </div>
  );
}

OrderEntry.defaultProps = {
  setOrderPhase: () => { },
};

OrderEntry.propTypes = {
  setOrderPhase: PropTypes.func,
};

export default OrderEntry;
