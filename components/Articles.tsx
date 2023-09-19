import { ArticlePreview } from "./ArticlePreview";
import styles from "./Articles.module.css";

export const Articles = () => (
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
);
