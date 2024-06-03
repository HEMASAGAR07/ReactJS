import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const TaskDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch('http://localhost:8000/tasks/' + id);
  const history = useHistory();

  const handleClick = () => {
    fetch('http://localhost:8000/tasks/' + blog.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    }) 
  }

  return (
    <div className="blog-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { blog && (
        <article>
          <h2>{ blog.title }</h2>
          <p>Task Added { blog.author }</p>
          <p>Deadline: { new Date(blog.deadline).toLocaleString() }</p>
          <div>{ blog.body }</div>
          <button onClick={handleClick}>delete</button>
        </article>
      )}
    </div>
  );
}
 
export default TaskDetails;
