import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import CommentForm from "../CommentForm/CommentForm";
import Comments from "../Comments/Comments";

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
    <div>
      <Image src={image} alt="image name" width={600} height={400} />
      <h1>{title}</h1>
      <h2>
        {artist} - {year}
      </h2>
      <h3>{genre}</h3>
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
      />
      {comments && <Comments comments={comments} />}
      <CommentForm onSubmitComment={onSubmitComment} />
      <button>
        <Link href={`/art-pieces`}>Go Back</Link>
      </button>
    </div>
  );
}
