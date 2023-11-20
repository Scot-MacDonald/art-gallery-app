// Import necessary styles and components
import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "../components/layout/layout";
import useLocalStorageState from "use-local-storage-state";

// Custom App component, essentially serving as a wrapper
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

// Custom fetcher function for SWR to handle API requests
const fetcher = async (...args) => {
  const response = await fetch(...args);
  if (!response.ok) {
    // Error handling for non-ok response
    throw new Error(`API request failed: ${JSON.stringify(args)}`);
  }
  return await response.json();
};

// Main App component responsible for data fetching and state management
export default function App({ Component, pageProps }) {
  // Fetch data using SWR hook
  const { data, isLoading, error } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  // Local storage state management for art pieces info
  const [artPiecesInfo, setArtPiecesInfo] = useLocalStorageState(
    "art-pieces-info",
    { defaultValue: [] }
  );

  // Function to toggle the favorite status of an art piece
  function handleToggleFavorite(slug) {
    const artPiece = artPiecesInfo.find((piece) => piece.slug === slug);
    if (artPiece) {
      // Update favorite status if art piece is already in local storage
      setArtPiecesInfo(
        artPiecesInfo.map((pieceInfo) =>
          pieceInfo.slug === slug
            ? { slug, isFavorite: !pieceInfo.isFavorite }
            : pieceInfo
        )
      );
    } else {
      // Add art piece to local storage with isFavorite set to true
      setArtPiecesInfo([...artPiecesInfo, { slug, isFavorite: true }]);
    }
  }

  // Function to submit a new comment for an art piece
  function onSubmitComment(slug, newComment) {
    const artPiece = artPiecesInfo.find((piece) => piece.slug === slug);
    if (artPiece) {
      // Update comments if art piece is already in local storage
      setArtPiecesInfo(
        artPiecesInfo.map((pieceInfo) => {
          if (pieceInfo.slug === slug) {
            return pieceInfo.comments
              ? { ...pieceInfo, comments: [...pieceInfo.comments, newComment] }
              : { ...pieceInfo, comments: [newComment] };
          } else {
            return pieceInfo;
          }
        })
      );
    } else {
      // Add art piece to local storage with isFavorite set to false and a new comment
      setArtPiecesInfo([
        ...artPiecesInfo,
        { slug, isFavorite: false, comments: [newComment] },
      ]);
    }
  }

  // Render the main layout and global styles, passing necessary props to the child component
  return (
    <Layout>
      <GlobalStyle />
      <Component
        {...pageProps}
        pieces={isLoading || error ? [] : data}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={handleToggleFavorite}
        onSubmitComment={onSubmitComment}
      />
    </Layout>
  );
}
