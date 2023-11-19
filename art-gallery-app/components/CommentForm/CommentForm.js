import styles from "@/styles/comments.module.css";
import Link from "next/link";
export default function CommentForm({ onSubmitComment }) {
  function handleSubmit(e) {
    e.preventDefault();
    const { comment } = e.target.elements;
    onSubmitComment(comment.value);
    e.target.reset();
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit} aria-label="art">
      <label htmlFor="comment">
        <h2>Comment:</h2>
      </label>
      <textarea type="test" name="comment" id="comment" rows="5" />
      <button className={styles.bt} type="submit">
        Send
      </button>
    </form>
  );
}
