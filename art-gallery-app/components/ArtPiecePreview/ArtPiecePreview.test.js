import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ArtPiecePreview from "./ArtPiecePreview";

test("renders an Art Piece title", () => {
  render(<ArtPiecePreview title="Orange Red and Green Abstract Painting" />);
  const orangeHeading = screen.getByRole("heading", {
    title: "Orange Red and Green Abstract Painting",
  });
  expect(orangeHeading).toBeInTheDocument();
});

test("renders artist name", () => {
  render(<ArtPiecePreview artist="Steve Johnson" />);

  const artist = screen.getByText("Steve Johnson");
  expect(artist).toBeInTheDocument();
});
