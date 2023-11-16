import Image from "next/image";
import styles from "@/styles/ArtPiecePreview.module.css";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

export default function Spotlight({
  image,
  artist,
  name,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <div className={styles.spotlight}>
      <Image src={image} width={600} height={400}></Image>
      <h2 className={styles.spotlight}>{artist}</h2>
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
      />
    </div>
  );
}
