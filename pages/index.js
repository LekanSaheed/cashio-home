import Wrapper from "../components/Wrapper";
import Head from "next/head";
const Home = () => {
  return (
    <div>
      <Head>
        <title>Borderless social payment across social platforms</title>
        <meta
          name="description"
          content="Borderless payment across social platforms"
        />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://mycashiowallet.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Cashio" />
        <meta
          property="og:description"
          content="Borderless payment across social platforms"
        />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/cashio-1ccdd.appspot.com/o/blue big.png?alt=media&token=7cf45ee7-54bc-4dcd-96f8-876fac443cde"
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="mycashiowallet.com" />
        <meta property="twitter:url" content="https://mycashiowallet.com/" />
        <meta name="twitter:title" content="Cashio" />
        <meta
          name="twitter:description"
          content="Borderless payment across social platforms"
        />
        <meta
          name="twitter:image"
          content="https://firebasestorage.googleapis.com/v0/b/cashio-1ccdd.appspot.com/o/blue big.png?alt=media&token=7cf45ee7-54bc-4dcd-96f8-876fac443cde"
        />
      </Head>
      <Wrapper />;
    </div>
  );
};

export default Home;
