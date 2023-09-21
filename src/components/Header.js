import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const isOnline = useOnlineStatus();
  const userLogin = useContext(userContext);
  const items = useSelector((store) => store.cartItems.items);
  const loggedInUser = useSelector((store) => store.loggedInUser.userName);
  console.log(items);

  return (
    <div className="flex justify-between  bg-slate-100">
      <div className="">
        <img className="w-24" alt="logo" src={LOGO_URL} />
      </div>
      <div className="flex items-center ">
        <ul className="flex ">
          <li className="px-6">Online Status : {isOnline ? "✅" : "🔴"}</li>
          <li className="px-6">
            <Link to="/"> Home </Link>{" "}
          </li>
          <li className="px-6">
            <Link to="/about"> About</Link>
          </li>
          <li className="px-6">
            <Link to="/contact"> Contact Us</Link>
          </li>
          <li className="px-6 font-bold">
            <Link to="/cart"> Cart ({items.length}) - items </Link>
          </li>
          <li className="px-6 font-bold">{loggedInUser}</li>
          <li className="px-6">
            <Link to="#login"> Logout</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
