import { Link } from "react-router";

const Home = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
        </ul>
      </nav>
      <h2>Home</h2>
    </div>
  );
};

export default Home;
