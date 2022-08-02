import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Esqune Perde</title>
      </Head>
      <div className={styles["image-wrapper"]}>
        <div className={styles.background}>
          <Image
            src={"/esqune_design.jpg"}
            layout="fill"
            alt="Esqune Perde"
            quality={70}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
