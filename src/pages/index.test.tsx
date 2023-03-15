import { render, screen } from "@testing-library/react";
import Home from "./index";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);
    const heading = screen.findByRole("heading", { name: /Calculator/ });
    expect(heading).toBeInTheDocument();
  });
});
