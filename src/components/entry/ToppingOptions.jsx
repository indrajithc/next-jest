/*
 * Copyright(c) 2022
 *
 * All rights reserved.
 *
 * @author Indrajith C
 */

import PropTypes from "prop-types";

function ToppingOptionsComponent(props) {
  const { name, imagePath } = props;

  return (
    <div>
      <img src={imagePath} alt={`${name} topping`} />
    </div>
  );
}

ToppingOptionsComponent.propTypes = {
  name: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
};

export default ToppingOptionsComponent;
