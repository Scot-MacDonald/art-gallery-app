import { render, screen } from "@testing-library/react";
import Spotlight from "./Spotlight";

test("renders an artist name", () => {
  render(<Spotlight artist="Steve Johnson" />);

  const artist = screen.getByText("Steve Johnson");
  expect(artist).toBeInTheDocument();
});

test("renders an image of the spotlight art", () => {
  render(<Spotlight />);

  const spotlightImage = screen.getAllByAltText(
    "Orange Red and Green Abstract Painting"
  );
});
