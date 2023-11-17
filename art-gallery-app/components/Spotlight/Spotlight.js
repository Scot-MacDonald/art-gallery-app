import Image from "next/image";
import styles from "@/styles/Spotlight.module.css";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

export default function Spotlight({
  image,
  artist,
  slug,
  isFavorite,
  onToggleFavorite,
  title,
}) {
  return (
    <div className={styles.spotlight}>

      <Image src={image} width={600} height={400} alt={title}></Image>
      <h2 className={styles.spotlight}>{artist}</h2>

      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
        slug={slug}
      />
      <Image src={image} width={600} height={400}></Image>
      <h2 className={styles.artist}>{artist}</h2>
    </div>
  );
}
