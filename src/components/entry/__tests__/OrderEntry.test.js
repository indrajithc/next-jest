import { render, screen, waitFor } from "@app/test-utils/testing-library-utils";
import "@testing-library/jest-dom";
// import userEvent from "@testing-library/user-event";
import { mswServer } from "@mocks/apiMock/mswServer";
import { toppingsHandlerError500 } from "@mocks/apiMock/handlers/api/toppings";
import { scoopsHandlerError500 } from "@mocks/apiMock/handlers/api/scoops";

import OrderEntry from "../OrderEntry";

test("Handle error for scoops and toppings routes", async () => {
  mswServer.resetHandlers(scoopsHandlerError500);
  mswServer.resetHandlers(toppingsHandlerError500);

  render(<OrderEntry setOrderPhase={jest.fn()} />);

  await waitFor(async () => {
    const alerts = await screen.findAllByRole("alert", {
      text: "An unexpected error occurred. Please try again later.",
    });
    expect(alerts).toHaveLength(2);
  });
});
