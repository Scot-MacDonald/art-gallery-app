import Image from "next/image";

export default function Spotlight({ image, artist }) {
  return (
    <div>
      <Image src={image} width={600} height={400}></Image>
      <h2>{artist}</h2>
    </div>
  );
}
