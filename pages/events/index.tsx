import type { NextPage } from "next";
import Head from "next/head";
import { Page } from "../../components/Page";

const Events: NextPage = () => {
  return (
    <Page>
      <Head>
        <title>HACKGPT4</title>
        <meta
          name="description"
          content="If you love MrBeast. See content, buy merch and find other Beasters"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </Page>
  );
};

export default Events;
