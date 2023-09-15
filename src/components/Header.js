import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="nav">
      <div>
        <img alt="logo" className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-menu">
        <ul>
          <li>
            <Link to="/"> Home </Link>{" "}
          </li>
          <li>
            <Link to="/about"> About</Link>
          </li>
          <li>
            <Link to="/contact"> Contact Us</Link>
          </li>
          <li>
            <Link to="/cart"> Cart</Link>
          </li>
          <li>
            <Link to="/login"> Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
