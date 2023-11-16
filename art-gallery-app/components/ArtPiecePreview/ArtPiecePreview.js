import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/ArtPiecePreview.module.css";
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
    <li className={styles.form}>
      <Image src={image} alt={title} width={600} height={400}></Image>
      <h2>{title}</h2>
      <p>{artist}</p>
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
        slug={slug}
      />
      <Link href={`/art-pieces/${slug}`}>click for more</Link>
    </li>
  );
}
