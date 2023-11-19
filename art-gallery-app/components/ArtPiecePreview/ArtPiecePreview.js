import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Spotlight.module.css";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

export default function ArtPiecePreview({
  image,
  title,
  artist,
  slug,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <>
      <Image src={image} alt={title} width={760} height={400}></Image>
      <div className={styles.footer}>
        <h2 className={styles.artist}>{artist}</h2>
        <FavoriteButton
          isFavorite={isFavorite}
          onToggleFavorite={onToggleFavorite}
        />
      </div>
      <h2>{title}</h2>
      <Link className={styles.bt} href={`/art-pieces/${slug}`}>
        More Details
      </Link>
    </>
  );
}
