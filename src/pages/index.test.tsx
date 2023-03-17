import { render, screen } from "@testing-library/react";
import Home from "./index";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);
    const heading = screen.getByRole("heading", { name: "Calculator" });
    const button1 = screen.getByRole("button", { name: "1" });
    const input = screen.getByTestId("display");
    expect(heading).toBeInTheDocument;
    expect(button1).toBeInTheDocument;
  });
});
