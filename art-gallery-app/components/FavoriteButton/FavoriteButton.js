import Image from "next/image";

const FavoriteButton = ({ isFavorite, onToggleFavorite, slug }) => {
  return (
    <button
      type="button"
      onClick={() => onToggleFavorite(slug)}
      aria-label={isFavorite ? "unlike" : "like"}
    >
      <Image src={"/assets/heart.svg"} width={40} height={40} alt="" />
    </button>
  );
};
export default FavoriteButton;
