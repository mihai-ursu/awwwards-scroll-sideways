import { FunctionComponent } from "react";
import Layout from "../components/Layout/Layout";
import TopBanner from "../components/TopBanner/TopBanner";
import styles from "../styles/Home.module.scss";

const Home: FunctionComponent = () => {
  return (
    <Layout>
      <main>
        {/* <div className={styles.space} /> */}
        <TopBanner />
        <div className={styles.space} />
      </main>
    </Layout>
  );
};

export default Home;
