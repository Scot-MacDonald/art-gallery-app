import Image from "next/image";
import styles from "@/styles/ArtPiecePreview.module.css";
import FavortieButton from "../FavoriteButton/FavoriteButton";

export default function Spotlight({
  image,
  artist,
  isFavorite,
  onToggleFavorite,
  slug,
}) {
  return (
    <div className={styles.spotlight}>
      <Image src={image} width={600} height={400}></Image>
      <h2 className={styles.spotlight}>{artist}</h2>
      <FavortieButton
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
        slug={slug}
      ></FavortieButton>
    </div>
  );
}
