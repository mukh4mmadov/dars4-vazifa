import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="grid place-items-center">
      <h1 className="text-3xl">There are NOTHING</h1>
      <Link className="btn btn-primary mt-2" to="/">
        Go Home
      </Link>
    </div>
  );
}

export default Contact;
