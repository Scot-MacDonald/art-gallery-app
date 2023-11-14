// import useSWR from "swr";
// import { useState } from "react";
// import Image from "next/image";

// export default function HomePage() {
//   const [id, setId] = useState({});

//   const { data, error, isLoading } = useSWR(
//     `https://example-apis.vercel.app/api/art`
//   );
//   if (error) return <div>failed to load</div>;
//   if (isLoading) return <div>loading...</div>;
//   console.log(data);
//   return (
//     <div>
//       <div>
//         {data.map(({ name, artist, imageSource, slug }) => (
//           <li key={slug}>
//             <div key={name}>{name}</div>
//             <div>{artist}</div>
//             <Image src={imageSource} alt={name} width={312} height={312} />
//           </li>
//         ))}
//       </div>
//     </div>
//   );
// }

import useSWR from "swr";
import ArtPieces from "../components/ArtPieces/ArtPieces";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const url = "https://example-apis.vercel.app/api/art";

export default function HomePage() {
  const { data, isLoading, error } = useSWR(url, fetcher);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div>
      <p>Art sucks...</p>
      <ArtPieces pieces={data} />
    </div>
  );
}
