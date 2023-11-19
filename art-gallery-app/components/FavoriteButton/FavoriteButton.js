import styles from "@/styles/FavoriteButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
  return (
    <button
      className={styles.favoriteButton}
      type="button"
      onClick={onToggleFavorite}
      aria-label={isFavorite ? "unlike" : "like"}
    >
      <FontAwesomeIcon
        icon={faHeart}
        style={{ color: isFavorite ? "#f4cae2" : "black" }}
      />
    </button>
  );
}
