import { Link } from "react-router-dom";
import ClearStorage from "./ClearStorage";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link onClick={ClearStorage} to="/">
        <b>Home</b>
      </Link>{" "}
      |{" "}
      <Link onClick={ClearStorage} to="/team">
        <b>Compare</b>
      </Link>
    </nav>
  );
};

export default Navbar;
