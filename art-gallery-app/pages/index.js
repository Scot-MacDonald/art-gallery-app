// Importing necessary Next.js components and custom component
import Head from "next/head.js";
import Spotlight from "../components/Spotlight/Spotlight";

// SpotlightPage component to display a randomly selected art piece
export default function SpotlightPage({
  pieces,
  artPiecesInfo,
  onToggleFavorite,
}) {
  // Select a random art piece for the spotlight
  const spotlightPiece =
    pieces[Math.floor(Math.random() * (pieces.length - 1))];

  return (
    <>
      {/* Head component for updating the title of the page */}
      <Head>
        <title>Art Gallery - Spotlight</title>
      </Head>
      {/* Render the Spotlight component if there is a spotlight piece */}
      {spotlightPiece && (
        <Spotlight
          image={spotlightPiece.imageSource}
          artist={spotlightPiece.artist}
          isFavorite={
            // Determine if the spotlight piece is marked as a favorite
            artPiecesInfo.find((piece) => piece.slug === spotlightPiece.slug)
              ?.isFavorite
          }
          onToggleFavorite={onToggleFavorite}
          slug={spotlightPiece.slug}
        />
      )}
    </>
  );
}
