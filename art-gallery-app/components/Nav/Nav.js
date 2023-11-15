import Link from "next/link";

export default function Nav({ pieces }) {
  return (
    <>
      <ul>
        <li>
          <Link href={"/"}>SpotlightPage</Link>
          <Link href={"/art-pieces"}>art-pieces</Link>
        </li>
      </ul>
    </>
  );
}
