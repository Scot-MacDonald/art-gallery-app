import Link from "next/link";
import styles from "@/styles/Nav.module.css";

export default function Nav({ pieces }) {
  return (
    <>
      <nav className={styles.nav}>
        <Link href={"/art-pieces"}>Art Pieces</Link>
        <Link href={"/"}>Spotlight</Link>
        <Link href={"/favorites"}>Favorites</Link>
        <Link href={"/favorites"}></Link>
      </nav>
    </>
  );
}
