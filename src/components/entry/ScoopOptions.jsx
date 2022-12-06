/*
 * Copyright(c) 2022
 *
 * All rights reserved.
 *
 * @author Indrajith C
 */

import PropTypes from "prop-types";
import { useOrderDetails } from "@app/contexts/OrderDetails";

function ScoopOptionsComponent(props) {
  const { name, imagePath } = props;

  const { updateItemCount } = useOrderDetails();
  const handleChange = (e) => updateItemCount(name, e.target.value, "scoops");

  return (
    <div>
      <img src={imagePath} alt={`${name} scoop`} />
      <input
        id={`counter${name}`}
        type="number"
        role="spinbutton"
        onChange={handleChange}
        defaultValue={0}
      />
      <label htmlFor={`counter${name}`}>{name}</label>
    </div>
  );
}

ScoopOptionsComponent.propTypes = {
  name: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
};

export default ScoopOptionsComponent;
