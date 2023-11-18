import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ArtPiecesDetails from "../../../components/ArtPieceDetails/ArtPieceDetails";

export default function ArtPieceDetailsPage({
  pieces,
  artPiecesInfo,
  onToggleFavorite,
  onSubmitComment,
}) {
  const [selectedArtPiece, setSelectedArtPiece] = useState(null);
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    setSelectedArtPiece(pieces.find((piece) => piece.slug === slug));
  }, [setSelectedArtPiece, pieces, slug]);

  useEffect(() => {
    let timeoutId;
    if (!selectedArtPiece) {
      timeoutId = setTimeout(() => router.push("/404"), 3000);
    }

    return () => clearTimeout(timeoutId);
  }, [selectedArtPiece, router]);

  const selectedArtPieceComments = artPiecesInfo.find(
    (piece) => piece.slug === selectedArtPiece?.slug
  )?.comments;

  if (!selectedArtPiece) {
    return null;
  }

  return (
    <>
      <ArtPiecesDetails
        onBack={() => router.back()}
        image={selectedArtPiece.imageSource}
        title={selectedArtPiece.name}
        artist={selectedArtPiece.artist}
        year={selectedArtPiece.year}
        genre={selectedArtPiece.genre}
        isFavorite={
          artPiecesInfo.find((piece) => piece.slug === selectedArtPiece.slug)
            ?.isFavorite
        }
        onToggleFavorite={() => onToggleFavorite(selectedArtPiece.slug)}
        comments={selectedArtPieceComments}
        onSubmitComment={(newComment) =>
          onSubmitComment(selectedArtPiece.slug, newComment)
        }
      />
    </>
  );
}
