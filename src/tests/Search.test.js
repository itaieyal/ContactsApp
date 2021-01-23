import { render, screen } from "@testing-library/react";
import Search from "../components/search";

test("Header should render", () => {
  render(<Search />);
  const searchInputElement = screen.getByPlaceholderText(/Search.../i);
  expect(searchInputElement).toBeInTheDocument();
});
