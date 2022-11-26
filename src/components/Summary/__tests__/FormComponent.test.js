import { render, screen, fireEvent } from "@testing-library/react";
import FormComponent from "@components/Summary/components/FormComponent";
import "@testing-library/jest-dom";

test("Initial conditions", () => {
  render(<FormComponent />);
  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  expect(checkbox).not.toBeChecked();

  const confirmButton = screen.getByRole("button", {
    name: /confirm order/i,
  });

  expect(confirmButton).toBeDisabled();
});

test("Checkbox enables button on first click and disables on second click", () => {
  render(<FormComponent />);
  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });

  const confirmButton = screen.getByRole("button", {
    name: /confirm order/i,
  });

  fireEvent.click(checkbox);
  expect(confirmButton).toBeEnabled();

  fireEvent.click(checkbox);
  expect(confirmButton).toBeDisabled();
});
