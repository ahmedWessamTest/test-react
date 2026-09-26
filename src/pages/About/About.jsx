import { Link } from "react-router";

const About = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
        </ul>
      </nav>
      <h2>About</h2>
    </div>
  );
};
export default About;
