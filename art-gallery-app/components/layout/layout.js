import Nav from "@/components/Nav/Nav";
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
