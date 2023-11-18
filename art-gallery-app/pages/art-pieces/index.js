import ArtPieces from "@/components/ArtPieces/ArtPieces";

export default function ArtPiecesPage({
  pieces,
  onArtPiecesInfo,
  artPiecesInfo,
  onToggleFavorite,
}) {
  return (
    <>
      <h1>ART PIECES</h1>
      <ArtPieces
        pieces={pieces}
        onArtPiecesInfo={onArtPiecesInfo}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={onToggleFavorite}
      />
    </>
  );
}
