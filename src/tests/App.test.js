import { render, screen } from "@testing-library/react";
import App from "../App";

test("Header should render", () => {
  render(<App />);
  const headerElement = screen.getByText(/Contact List/i);
  expect(headerElement).toBeInTheDocument();
});
