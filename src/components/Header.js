import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="nav">
      <div>
        <img alt="logo" className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-menu">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
