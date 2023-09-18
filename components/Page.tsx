import Head from "next/head";
import styles from "./Page.module.css";

interface Props {
  children: any;
}

export const Page = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>HackGPT4.com</title>
        <meta
          name="description"
          content="Explore the intricacies of ChatGPT-4, OpenAI's latest language model. Dive deep into its features, improvements over previous versions, and the myriad applications that redefine AI-driven communication and research"
        />
        <link rel="icon" href="/favicon.ico" />
        {/* eslint-disable */}
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-RW7YPRWHKR`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RW7YPRWHKR', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
        {/* eslint-enable */}
      </Head>
      <div className={styles.container}>
        <div className={styles.content}>{children}</div>
      </div>
    </>
  );
};
