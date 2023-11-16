import Image from "next/image";
import styles from "@/styles/ArtPiecePreview.module.css";

export default function Spotlight({ image, artist, name }) {
  return (
    <div className={styles.spotlight}>
      <Image src={image} width={600} height={400}></Image>
      <h2 className={styles.spotlight}>{artist}</h2>
    </div>
  );
}
