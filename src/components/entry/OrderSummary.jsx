import React from "react";
import SummaryForm from "@components/Summary/components/FormComponent";
import { useOrderDetails } from "@app/contexts/OrderDetails";
import { formatCurrency } from "@app/utilities";

import PropTypes from "prop-types";

export default function OrderSummary(props) {
  const { setOrderPhase } = props;
  const { totals, optionCounts } = useOrderDetails();

  const scoopArray = Object.entries(optionCounts.scoops);
  const scoopList = scoopArray.map(([key, value]) => (
    <li key={key}>
      {value} {key}
    </li>
  ));

  const toppingArray = Object.entries(optionCounts.toppings);
  const toppingList = toppingArray.map(([key, value]) => (
    <li key={key}>
      {value} {key}
    </li>
  ));

  return (
    <div>
      <h1>Order Summary</h1>
      <h2>Scoops: {formatCurrency(totals.scoops)}</h2>
      <ul>{scoopList}</ul>
      <h2>Toppings: {formatCurrency(totals.toppings)}</h2>
      <ul>{toppingList}</ul>
      <SummaryForm setOrderPhase={setOrderPhase} />
    </div>
  );
}

OrderSummary.propTypes = {
  setOrderPhase: PropTypes.func.isRequired,
};
