import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar rounded-lg mb-4 bg-base-300">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl ">
          PHONE <i>Store</i>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link className="" to="/">
              Home
            </Link>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/articles">Articles</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
