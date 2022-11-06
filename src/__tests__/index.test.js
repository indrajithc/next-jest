// __tests__/index.test.jsx

import { render, screen } from "@testing-library/react";
import Home from "@app/pages/index";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("renders a welcome message", () => {
    render(<Home />);

    const heading = screen.getByRole("presentation", {
      text: /welcome/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
