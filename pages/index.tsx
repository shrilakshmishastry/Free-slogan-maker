import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "components/Navbar";
import MainContent from "components/MainContent/index";
import Footer from "components/Footer";

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dukkan</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <MainContent data={data} />
      <Footer />
    </div>
  );
}

export async function getStaticProps(context) {
  let data = [];
  try {
    data = await fetch(
      "https://goquotes-api.herokuapp.com/api/v1/random?count=50"
    );
    data = await data.json();
    data = await data.quotes;
    return {
      props: {
        data,
      },
    };
  } catch (e) {
    console.log(e);
    return {
      props: {
        data,
      },
    };
  }
}
