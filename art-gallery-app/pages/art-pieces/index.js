import ArtPieces from "@/components/ArtPieces/ArtPieces";
// import Nav from "@/components/Nav/nav";
// import Link from "next/link";

// export default function test() {
//   return (
//     <div>
//       <h1>hello</h1>
//     </div>
//   );
// }

export default function ArtPiecesPage({ data }) {
  return (
    <div className="art-pieces-list">
      <ArtPieces pieces={data} />
    </div>
  );
}
