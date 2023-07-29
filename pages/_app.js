import { Layout } from "@/components/Layout";
import { myImage } from "@/components/assets/images";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href={myImage} />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
