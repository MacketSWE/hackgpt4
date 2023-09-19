import type { NextPage } from "next";
import { Page } from "../components/Page";
import { Articles } from "../components/Articles";

const Home: NextPage = () => {
  return (
    <Page
      description={`"Explore the intricacies of ChatGPT-4, OpenAI's latest language model. Dive deep into its features, improvements over previous versions, and the myriad applications that redefine AI-driven communication and research"`}
      keywords="ai, chat gpt, future, openai, gpt-4, gpt4, gpt, chatbot, chatbots, chatbot ai, chatbot online, chatbot website, chatbot messenger, chatbot facebook, chatbot for website, chatbot for facebook, chatbot for messenger, chatbot messenger facebook, chatbot messenger online, chatbot messenger website, chatbot messenger ai, chatbot messenger bot, chatbot messenger free, chatbot messenger free, chatbot messenger"
      author="Stockholm Mobile & Web"
    >
      <Articles />
    </Page>
  );
};

export default Home;
