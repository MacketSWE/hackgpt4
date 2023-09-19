import Link from "next/link";
import styles from "./ArticlePreview.module.css";

export const ArticlePreview = ({ title, description, link }: any) => {
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <p>{description}</p>

      <Link href={link}>
        <div className={styles.linkContainer}>Read More</div>
      </Link>
    </div>
  );
};
