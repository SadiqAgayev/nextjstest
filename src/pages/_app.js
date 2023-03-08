import Layout from "@/layout/Layout";
import "@/styles/globals.css";
// import Product from "./product";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      {/* <Product /> */}
      <Component {...pageProps} />
    </Layout>
  );
}
