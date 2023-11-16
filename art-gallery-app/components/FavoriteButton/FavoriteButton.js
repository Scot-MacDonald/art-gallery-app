import React from "react";

export default function FavortieButton({ isFavorite, onToggleFavorite, slug }) {
  return (
    <button
      onClick={() => onToggleFavorite(slug)}
      className={isFavorite ? "favorite" : ""}
      aria-label={isFavorite ? "true" : "false"}
    >
      {isFavorite ? "❤️" : "🖤"}{" "}
    </button>
  );
}
