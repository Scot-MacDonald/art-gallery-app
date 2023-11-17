export default function CommentForm({ onSubmitComment }) {
  function handleSubmit(e) {
    e.preventDefault();
    const { comment } = e.target.elements;
    onSubmitComment(comment.value);
    e.target.reset();
  }
  return (
    <form
      onSubmit={handleSubmit}
      aria-label="how does this 'art' make you feel.."
    >
      <label htmlFor="comment">leave a comment:</label>
      <textarea type="test" name="comment" id="comment" rows="1" />
      <button type="submit">Send</button>
    </form>
  );
}
