/*
 * Copyright(c) 2022
 *
 * All rights reserved.
 *
 * @author Indrajith C
 */

import { useState } from "react";

import {
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  Popover,
  PopoverBody,
} from "reactstrap";
import PropTypes from "prop-types";

function FormComponent(props) {
  const { setOrderPhase } = props;
  const [isTcChecked, setIsTcChecked] = useState(false);
  const [popoverOpen, isPopoverOpen] = useState(false);

  const toggle = () => isPopoverOpen((oS) => !oS);

  const handleSubmit = (event) => {
    event.preventDefault();

    // pass along to the next phase.
    // The next page will handle submitting order from context.
    setOrderPhase("completed");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup check>
        <Label check id="tandc" onMouseEnter={toggle} onMouseLeave={toggle}>
          <Input
            type="checkbox"
            onChange={(e) => setIsTcChecked(e.target.checked)}
          />
          Terms and Conditions
        </Label>
      </FormGroup>
      <FormGroup>
        <Button type="submit" disabled={!isTcChecked}>
          Confirm order
        </Button>
      </FormGroup>
      <Popover
        placement="bottom"
        isOpen={popoverOpen}
        target="tandc"
        toggle={toggle}
        trigger="hover"
      >
        {popoverOpen ? (
          <PopoverBody>no ice cream will actually be delivered</PopoverBody>
        ) : (
          ""
        )}
      </Popover>
    </Form>
  );
}

FormComponent.defaultProps = {
  setOrderPhase: () => { },
};

FormComponent.propTypes = {
  setOrderPhase: PropTypes.func,
};

export default FormComponent;
