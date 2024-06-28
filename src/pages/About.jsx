import { Link } from "react-router-dom";

function About() {
  return (
    <div className="grid place-items-center">
      <h1 className="text-3xl">There are NOTHING</h1>
      <Link className="btn btn-primary mt-5" to="/">
        Go Home
      </Link>
    </div>
  );
}

export default About;
