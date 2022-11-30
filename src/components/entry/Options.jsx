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

import ScoopOptionsComponent from "@components/entry/ScoopOptions";

function OptionsComponent(props) {
  const { optionType } = props;
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3030/api/v1/${optionType}`)
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        // todo handle error
        console.error(error);
      });
  }, [optionType]);

  const ItemComponent = optionType === "scoops" ? ScoopOptionsComponent : null;

  const optionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));

  return <div>{optionItems}</div>;
}

OptionsComponent.propTypes = {
  optionType: PropTypes.string.isRequired,
};

export default OptionsComponent;
