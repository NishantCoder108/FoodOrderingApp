import { useContext } from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/userContext";

const ContactUs = () => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="text-center">
      <h1>Name : {loggedInUser} </h1>
      <UserClass />
    </div>
  );
};

export default ContactUs;
