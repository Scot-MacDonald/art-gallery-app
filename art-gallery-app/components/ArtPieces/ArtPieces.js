import useSWR from "swr";
import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";
import styles from "@/styles/ArtPiecePreview.module.css";

export default function ArtPieces({ pieces, onToggleFavorite, artPiecesInfo }) {
  return (
    <ul className={styles.forms}>
      {pieces.map((piece) => {
        const { isFavorite } = artPiecesInfo?.find(
          (item) => item.slug === piece.slug
        );
        return (
          <ArtPiecePreview
            onToggleFavorite={onToggleFavorite}
            slug={piece.slug}
            key={piece.slug}
            image={piece.imageSource}
            title={piece.name}
            artist={piece.artist}
            isFavorite={isFavorite}
          />
        );
      })}
    </ul>
  );
}
