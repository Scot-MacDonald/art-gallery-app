import useSWR from "swr";
import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";
import styles from "@/styles/ArtPiecePreview.module.css";

export default function ArtPieces({ pieces, artPiecesInfo, onToggleFavorite }) {
  console.log(pieces);
  return (
    <>
      <ul className={styles.forms}>
        {pieces?.map((piece) => {
          return (
            <li key={piece.slug}>
              <ArtPiecePreview
                image={piece.imageSource}
                title={piece.name}
                artist={piece.artist}
                slug={piece.slug}
                isFavorite={
                  artPiecesInfo?.find(
                    (artPiece) => artPiece.slug === piece.slug
                  )?.isFavorite
                }
                onToggleFavorite={() => onToggleFavorite(piece.slug)}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}
