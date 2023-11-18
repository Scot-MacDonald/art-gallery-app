import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import CommentForm from "../CommentForm/CommentForm";
import Comments from "../Comments/Comments";
import styles from "@/styles/Spotlight.module.css";

export default function ArtPieceDetails({
  image,
  title,
  artist,
  year,
  genre,
  isFavorite,
  onToggleFavorite,
  onSubmitComment,
  comments,
}) {
  return (
    <div className={styles.spotlight}>
      <h1>Art Details</h1>
      <Image src={image} alt="image name" width={600} height={400} />
      <div className={styles.footer}>
        <h2 className={styles.artist}>{artist}</h2>
        <FavoriteButton
          isFavorite={isFavorite}
          onToggleFavorite={onToggleFavorite}
        />
      </div>
      <div className={styles.footer}>
        <h2>{year}</h2>
        <h2>{genre}</h2>
      </div>
      {comments && <Comments comments={comments} />}
      <CommentForm onSubmitComment={onSubmitComment} />
      <button>
        <Link href={`/art-pieces`}>Go Back</Link>
      </button>
    </div>
  );
}
