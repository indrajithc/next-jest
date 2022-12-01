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

test("Checkbox enables button on first click and disables on second click", async () => {
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

test("Popover responds to hover", async () => {
  const user = userEvent.setup();
  render(<FormComponent />);

  // popover starts out hidden
  const nullPopover = screen.queryByText(
    /no ice cream will actually be delivered/i
  );
  expect(nullPopover).not.toBeInTheDocument();

  // popover appears on mouse hover of checkbox
  const termsAndConditions = screen.getByText(/terms and conditions/i);
  await user.hover(termsAndConditions);
  const popover = screen.getByText(/no ice cream will actually be delivered/i);
  expect(popover).toBeInTheDocument();

  // popover disappears when mouse out
  await user.unhover(termsAndConditions);
  expect(popover).not.toBeInTheDocument();
});
