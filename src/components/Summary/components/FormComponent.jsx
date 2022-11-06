/*
 * Copyright(c) 2022
 *
 * All rights reserved.
 *
 * @author Indrajith C
 */

// import propTypes from "prop-types";
import { useState } from "react";

import { Form, FormGroup, Input, Label, Button } from "reactstrap";

function FormComponent(props) {
  const [isTcChecked, setIsTcChecked] = useState(false);
  return (
    <Form>
      <FormGroup check>
        <Label check>
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
    </Form>
  );
}

FormComponent.propTypes = {};

export default FormComponent;
