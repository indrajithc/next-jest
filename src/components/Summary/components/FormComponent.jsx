/*
 * Copyright(c) 2022
 *
 * All rights reserved.
 *
 * @author Indrajith C
 */

// import propTypes from "prop-types";
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

function FormComponent(props) {
  const [isTcChecked, setIsTcChecked] = useState(false);
  const [popoverOpen, isPopoverOpen] = useState(false);

  const toggle = () => isPopoverOpen((oS) => !oS);

  return (
    <Form>
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

FormComponent.propTypes = {};

export default FormComponent;
