import { render, screen } from "@testing-library/react";
import Spotlight from "./Spotlight";

test("renders an artist name", () => {
  render(<Spotlight artist="Steve Johnson" />);

  const artist = screen.getByText("Steve Johnson");
  expect(artist).toBeInTheDocument();
});
