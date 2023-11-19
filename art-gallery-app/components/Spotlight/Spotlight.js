import Image from "next/image";
import styles from "@/styles/Spotlight.module.css";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

export default function Spotlight({
  image,
  artist,
  slug,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <div className={styles.spotlight}>
      <h1>SPOTLIGHT</h1>

      <Image src={image} width={760} height={400}></Image>
      <div className={styles.footer}>
        <h2 className={styles.artist}>{artist}</h2>
        <FavoriteButton
          isFavorite={isFavorite}
          onToggleFavorite={onToggleFavorite}
          slug={slug}
        />
      </div>
    </div>
  );
}
