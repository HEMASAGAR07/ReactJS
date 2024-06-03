import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');
  const [deadline, setDeadline] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author, deadline };

    fetch('http://localhost:8000/tasks/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      history.push('/');
    });
  };

  return (
    <div className="create">
      <h2>Add new task</h2>
      <form onSubmit={handleSubmit}>
        <label>Task to do:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Task Description:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Users:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">Administrator</option>
          <option value="yoshi">Trail User</option>
        </select>
        <label>Deadline:</label>
        <input 
          type="datetime-local" 
          required
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
        <button>Add Task</button>
      </form>
    </div>
  );
};

export default Create;
