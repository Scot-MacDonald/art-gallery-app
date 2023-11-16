import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/ArtPiecePreview.module.css";

export default function ArtPiecePreview({ image, title, artist, slug }) {
  return (
    <li className={styles.form}>
      <Image src={image} alt={title} width={600} height={400}></Image>
      <h2>{title}</h2>
      <p>{artist}</p>
      <Link href={`/art-pieces/${slug}`}>click for more</Link>
    </li>
  );
}
