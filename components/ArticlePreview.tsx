import Link from "next/link";
import styles from "./ArticlePreview.module.css";

export const ArticlePreview = ({ title, description, link }: any) => {
  return (
    <div className={styles.container}>
      <div className={styles.articlePreviewContent}>
        <h2>{title}</h2>
        <p>{description}</p>
        <Link href={link}>Read More</Link>
      </div>
    </div>
  );
};
