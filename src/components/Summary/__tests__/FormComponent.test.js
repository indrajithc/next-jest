import { render, screen } from "@testing-library/react";
import FormComponent from "@components/Summary/components/FormComponent";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

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

test("Checkbox enables butto-n on first click and disables on second click", async () => {
  const user = userEvent.setup();

  render(<FormComponent />);
  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });

  const confirmButton = screen.getByRole("button", {
    name: /confirm order/i,
  });

  await user.click(checkbox);
  expect(confirmButton).toBeEnabled();

  await user.click(checkbox);
  expect(confirmButton).toBeDisabled();
});
