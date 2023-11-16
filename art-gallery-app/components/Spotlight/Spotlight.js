import Image from "next/image";

export default function Spotlight({ image, artist, name }) {
  return (
    <div>
      <Image src={image} width={600} height={400} name={name}></Image>
      <h2>{artist}</h2>
    </div>
  );
}
