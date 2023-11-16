// import Spotlight from "../components/Spotlight/Spotlight";

// export default function SpotlightPage({ data }) {
//   let randNumber = null;
//   if (!data) {
//     return;
//   }

//   function random() {
//     return (randNumber = Math.floor(Math.random() * data.length));
//   }
//   random();
//   return (
//     <>
//       <Spotlight
//         image={data[randNumber].imageSource}
//         artist={data[randNumber].artist}
//       />
//     </>
//   );
// }

import Head from "next/head.js";
import Spotlight from "../components/Spotlight/Spotlight";

export default function SpotlightPage({
  pieces,
  artPiecesInfo,
  onToggleFavorite,
}) {
  const spotlightPiece =
    pieces[Math.floor(Math.random() * (pieces.length - 1))];

  return (
    <>
      <Head>
        <title>Art Gallery - Spotlight</title>
      </Head>
      {spotlightPiece && (
        <Spotlight
          image={spotlightPiece.imageSource}
          artist={spotlightPiece.artist}
          isFavorite={
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
