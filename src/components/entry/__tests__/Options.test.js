import { render, screen } from "@testing-library/react";
import Options from "@components/entry/Options";
import "@testing-library/jest-dom";
// import userEvent from "@testing-library/user-event";

test("Displays image for each scoop options from server", async () => {
  render(<Options optionType="scoops" />);

  // find images
  const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  // confirm alt text of images
  const altText = scoopImages.map((element) => element.alt);
  expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});
