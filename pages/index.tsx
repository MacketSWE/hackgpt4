import type { NextPage } from "next";
import { Page } from "../components/Page";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Page>
      <div className={styles.container}>
        <h1>HackGPT4.com</h1>
        <div>
          This domain is for sale! Contact <span>hello@smwapps.com</span> for
          details
        </div>
      </div>
    </Page>
  );
};

export default Home;
