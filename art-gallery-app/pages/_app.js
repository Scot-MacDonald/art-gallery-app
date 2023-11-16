import GlobalStyle from "../styles";
import useSWR from "swr";
import RootLayout from "@/components/layout/layout";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const url = "https://example-apis.vercel.app/api/art";

export default function App({ Component, pageProps }) {
  const { data, isLoading, error } = useSWR(url, fetcher);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <GlobalStyle />
      <RootLayout />
      <Component {...pageProps} data={data} />
    </>
  );
}
