import type { NextPage } from "next";
import { Page } from "../components/Page";
import styles from "../styles/Home.module.css";
import { ArticlePreview } from "../components/ArticlePreview";

const Home: NextPage = () => {
  return (
    <Page
      description={`"Explore the intricacies of ChatGPT-4, OpenAI's latest language model. Dive deep into its features, improvements over previous versions, and the myriad applications that redefine AI-driven communication and research"`}
      keywords="ai, chat gpt, future, openai, gpt-4, gpt4, gpt, chatbot, chatbots, chatbot ai, chatbot online, chatbot website, chatbot messenger, chatbot facebook, chatbot for website, chatbot for facebook, chatbot for messenger, chatbot messenger facebook, chatbot messenger online, chatbot messenger website, chatbot messenger ai, chatbot messenger bot, chatbot messenger free, chatbot messenger free, chatbot messenger"
      author="Stockholm Mobile & Web"
    >
      <div className={styles.container}>
        <h1>HackGPT4.com</h1>
        <div className={styles.description}>
          This domain is for sale! Contact <span>hello@smwapps.com</span> for
          details
        </div>
      </div>
      <div className={styles.articles}>
        <ArticlePreview
          title="ChatGPT Successfully Completes MBA Examination at Wharton School"
          description="Recent developments in artificial intelligence continue to challenge traditional education and assessment practices. In a recent experiment, a professor from the..."
          image="/images/mba.jpg"
          link="/articles/mba"
        />
        <ArticlePreview
          title="What is ChatGPT?"
          description="ChatGPT is a state-of-the-art AI-driven natural language processing tool that facilitates human-like conversations. Leveraging sophisticated algorithms and a vast..."
          link="/articles/whatis"
        />
        <ArticlePreview
          title="ChatGPT's Creative Abilities: From Songs to Poetry"
          description="The creative prowess of ChatGPT in crafting song lyrics and poetry is both intriguing and, at times, unpredictable. An illustrative example is when we requested the AI to..."
          image="/images/mba.jpg"
          link="/articles/poetry"
        />
      </div>
    </Page>
  );
};

export default Home;
