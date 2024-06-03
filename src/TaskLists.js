import { Link } from 'react-router-dom';

const TaskLists = ({ blogs }) => {
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, droppedId) => {
    e.preventDefault();
    const draggedId = e.dataTransfer.getData('id');
    const draggedBlog = blogs.find(blog => blog.id === draggedId);
    const droppedBlog = blogs.find(blog => blog.id === droppedId);

    const progressPercentage = Math.round((e.clientX - e.target.getBoundingClientRect().left) / e.target.offsetWidth * 100);
    const newProgress = Math.min(100, Math.max(0, progressPercentage)); // Ensure progress is between 0 and 100

    if (draggedBlog && droppedBlog && draggedId !== droppedId) {
      draggedBlog.progress = newProgress;
    }
  };

  return (
    <div className="blog-list">
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{ blog.title }</h2>
            <p>Written by { blog.author }</p>
            <div
              className="progress"
              onDragOver={(e) => handleDragOver(e)}
              onDrop={(e) => handleDrop(e, blog.id)}
            >
              
            </div>
           
          </Link>
        </div>
      ))}
    </div>
  );
}

export default TaskLists;
