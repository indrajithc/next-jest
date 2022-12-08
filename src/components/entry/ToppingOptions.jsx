/*
 * Copyright(c) 2022
 *
 * All rights reserved.
 *
 * @author Indrajith C
 */

import PropTypes from "prop-types";
import { useOrderDetails } from "@app/contexts/OrderDetails";
import { FormGroup, Input, Label } from "reactstrap";

function ToppingOptionsComponent(props) {
  const { name, imagePath } = props;
  const { updateItemCount } = useOrderDetails();
  const handleChange = (e) => {
    updateItemCount(name, e.target.checked ? 1 : 0, "toppings");
  };

  return (
    <div>
      <img src={imagePath} alt={`${name} topping`} />
      <FormGroup check>
        <Label check>
          <Input type="checkbox" onChange={handleChange} name={name} />
          {name}
        </Label>
      </FormGroup>
    </div>
  );
}

ToppingOptionsComponent.propTypes = {
  name: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
};

export default ToppingOptionsComponent;
