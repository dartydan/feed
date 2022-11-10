import Link from "next/link";
import styles from "../styles/BlogCard.module.css";

export default function BlogPost({ datePublished, content }) {
  return (
    <div className={styles.card}>
      {/* <link href={"/posts/"}> */}
      <h2>@dartydan</h2>
      <div className={styles.content}>
        <p>{content}</p>
      </div>
      <div className={styles.date}>
        <h3>{datePublished}</h3>
      </div>
      {/* </link> */}
    </div>
  );
}
