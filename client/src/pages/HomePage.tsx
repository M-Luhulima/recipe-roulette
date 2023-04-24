import { Link } from "react-router-dom";
// import TaskDetails from "../components/TaskDetails";
// import { useTasksContext } from "../hooks/useTasksContext";

const HomePage= () => {
  return (
    <div className="HomePage">
      <h1>Hungry??</h1>
      <Link className="link-questions" to="/quiz">
        <button className="button HomePage__button">Start quiz</button>
      </Link>
      <Link to="/results">
      <button className="button HomePage__button">Get random recipe</button>
      </Link>
    </div>
  );
}

export default HomePage;
