import Link from "next/link";

export default function Nav({ pieces }) {
  return (
    <>
      <nav>
        <Link href={"/art-pieces"}>art-pieces</Link>
        <Link href={"/"}>SpotlightPage</Link>
        <Link href={"/favorites"}>favorites</Link>
      </nav>
    </>
  );
}
