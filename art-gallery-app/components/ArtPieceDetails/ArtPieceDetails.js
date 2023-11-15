import Image from "next/image";
import Link from "next/link";

export default function ArtPieceDetails({ image, title, artist, year, genre }) {
  return (
    <div>
      <Image src={image} alt="image name" width={600} height={400} />
      <h1>{title}</h1>
      <h2>
        {artist} - {year}
      </h2>
      <h3>{genre}</h3>
      <button>
        <Link href={`/art-pieces`}>Go Back</Link>
      </button>
    </div>
  );
}
