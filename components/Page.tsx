import Head from "next/head";
import styles from "./Page.module.css";
import { HackTitle } from "./HackTitle";

interface Props {
  children: any;
  description: string;
  author?: string;
  keywords?: string;
}

export const Page = ({ children, description, author, keywords }: Props) => {
  return (
    <>
      <Head>
        <title>HackGPT4.com</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <link rel="icon" href="/favicon.ico" />
        {/* eslint-disable */}
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        {/* <script
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
        /> */}
        {/* eslint-enable */}
      </Head>
      <div className={styles.container}>
        <div className={styles.content}>
          <HackTitle />
          {children}
        </div>
      </div>
    </>
  );
};
