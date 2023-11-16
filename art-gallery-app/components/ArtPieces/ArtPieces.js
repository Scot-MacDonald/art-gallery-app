import useSWR from "swr";
import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";
import styles from "@/styles/ArtPiecePreview.module.css";

export default function ArtPieces({ pieces }) {
  return (
    <ul className={styles.forms}>
      {pieces.map((piece) => {
        return (
          <ArtPiecePreview
            slug={piece.slug}
            key={piece.slug}
            image={piece.imageSource}
            title={piece.name}
            artist={piece.artist}
          />
        );
      })}
    </ul>
  );
}
