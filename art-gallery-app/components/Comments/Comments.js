import styles from "@/styles/comments.module.css";

export default function Comments({ comments }) {
  return (
    <div className={styles.comments}>
      <h2>Comments</h2>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            <h3 className={styles.comments}>{comment}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}
