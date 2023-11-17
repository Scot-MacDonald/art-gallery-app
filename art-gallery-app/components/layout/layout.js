import Nav from "../Nav/nav";
import styles from "@/styles/ArtPiecePreview.module.css";

const RootLayout = ({ children }) => {
  return (
    <>
      <Nav />

      <main className={styles.main}>{children}</main>
    </>
  );
};

export default RootLayout;
