import { FunctionComponent } from "react";
import Layout from "../components/Layout/Layout";
import TopBanner from "../components/TopBanner/TopBanner";

const Home: FunctionComponent = () => {
  return (
    <Layout>
      <main>
        <TopBanner />
      </main>
    </Layout>
  );
};

export default Home;
