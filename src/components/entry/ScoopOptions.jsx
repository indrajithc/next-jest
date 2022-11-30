/*
 * Copyright(c) 2022
 *
 * All rights reserved.
 *
 * @author Indrajith C
 */

import PropTypes from "prop-types";

function ScoopOptionsComponent(props) {
  const { name, imagePath } = props;

  return (
    <div>
      <img src={imagePath} alt={`${name} scoop`} />
    </div>
  );
}

ScoopOptionsComponent.propTypes = {
  name: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
};

export default ScoopOptionsComponent;
