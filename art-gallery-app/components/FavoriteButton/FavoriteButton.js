import styles from "@/styles/FavoriteButton.module.css";

export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
  return (
    <button
      className={styles.favoriteButton}
      type="button"
      onClick={onToggleFavorite}
      aria-label={isFavorite ? "unlike" : "like"}
    >
      {isFavorite ? "❤️" : "🖤"}
    </button>
  );
}
