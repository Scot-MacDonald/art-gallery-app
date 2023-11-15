import Link from "next/link";

export default function Nav({ pieces }) {
  return (
    <>
      <ul>
        <li>
          <Link href={"/"}>SpotlightPage</Link>
          <Link href={"/test"}>art-pieces</Link>
        </li>
      </ul>
    </>
  );
}
