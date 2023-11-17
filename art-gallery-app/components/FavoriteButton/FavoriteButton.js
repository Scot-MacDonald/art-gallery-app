export default function FavoriteButton({
  isFavorite,
  onToggleFavorite,
  positionAbsolute = false,
}) {
  const buttonStyles = {
    position: positionAbsolute ? "absolute" : "static",
    right: "1rem",
    top: "1.5rem",
    zIndex: 1,

    borderRadius: "50%",
    display: "grid",
    placeItems: "center",
    // font-size: "xx-large",
    border: "none",
    background: "none",
  };

  return (
    <button
      type="button"
      onClick={onToggleFavorite}
      style={buttonStyles}
      aria-label={isFavorite ? "unlike" : "like"}
    >
      {isFavorite ? "❤️" : "🖤"}
    </button>
  );
}
