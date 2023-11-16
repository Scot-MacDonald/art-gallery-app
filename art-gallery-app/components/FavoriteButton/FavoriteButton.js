import Image from "next/image";
const FavoriteButton = ({ isFavorite, onToggleFavorite }) => {
  return (
    <button
      type="button"
      onClick={onToggleFavorite}
      aria-label={isFavorite ? "unlike" : "like"}
    >
      <img src="/assets/heart.svg" width={40} height={40} alt="" />
    </button>
  );
};
export default FavoriteButton;
