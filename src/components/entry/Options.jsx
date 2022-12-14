/*
 * Copyright(c) 2022
 *
 * All rights reserved.
 *
 * @author Indrajith C
 */

import PropTypes from "prop-types";
import axios from "axios";
import { useEffect, useState } from "react";

import { formatCurrency } from "@app/utilities";
import { pricePerItem } from "@app/constants";

import ScoopOptionsComponent from "@components/entry/ScoopOptions";
import ToppingOptionsComponent from "@components/entry/ToppingOptions";

import AlertBanner from "@components/common/AlertBanner";

import { useOrderDetails } from "@app/contexts/OrderDetails";

function OptionsComponent(props) {
  const { optionType } = props;
  const [items, setItems] = useState([]);
  const [error, setErrors] = useState(false);
  const { totals } = useOrderDetails();

  useEffect(() => {
    axios
      .get(`http://localhost:3030/api/v1/${optionType}`)
      .then((response) => {
        setItems(response.data);
      })
      .catch((err) => {
        setErrors(true);
        // console.error(err);
      });
  }, [optionType]);

  const ItemComponent =
    optionType === "scoops" ? ScoopOptionsComponent : ToppingOptionsComponent;
  const title = optionType[0].toUpperCase() + optionType.slice(1).toLowerCase();

  if (error) {
    return <AlertBanner />;
  }

  const optionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));

  return (
    <>
      <h2>{title}</h2>
      <p>{formatCurrency(pricePerItem[optionType])} each</p>
      <p>
        {title} total: {formatCurrency(totals[optionType])}
      </p>
      <div>{optionItems}</div>
    </>
  );
}

OptionsComponent.propTypes = {
  optionType: PropTypes.string.isRequired,
};

export default OptionsComponent;
