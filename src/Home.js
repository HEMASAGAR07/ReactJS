import BlogList from "./TaskLists";
import useFetch from "./useFetch";

const Home = () => {
  const { error, isPending, data: blogs } = useFetch('http://localhost:8000/tasks')

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} /> }
    </div>
  );
}
 
export default Home;
