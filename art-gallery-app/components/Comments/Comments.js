export default function Comments({ comments }) {
  return (
    <div>
      <h1>Comment</h1>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            <p>{comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
