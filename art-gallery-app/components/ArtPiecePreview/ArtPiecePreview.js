import React from "react";
import Image from "next/image";

export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <li>
      <Image src={image} alt={title} width={600} height={400}></Image>
      <h2>{title}</h2>
      <p>{artist}</p>
    </li>
  );
}
