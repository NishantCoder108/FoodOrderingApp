import { useContext } from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/userContext";

const ContactUs = () => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="text-justify">
      <pre>
        {`
Hey,  I'm Nishant  
In this project, we've used all the important React concepts. We use Parcel to bundle our code neatly and React Router DOM to handle page navigation smoothly.

For managing data across the app, we rely on React's Context API, which helps us share data where needed.
We also make use of props and higher-order components to keep our code organized and flexible.

To manage the overall state of the app effectively, we use Redux Toolkit.
And for making our project look good and user-friendly, we've styled it using Tailwind CSS, ensuring a sleek design and responsiveness.

All these technologies work together to create a fantastic About page that showcases the best of our project in a simple and engaging way.
`}
      </pre>
      <h5 className="mt-3">
        Feel free to reach out to me on
        {
          <a
            className="font-extrabold underline text-[#00a9ff]"
            href="https://github.com/NishantCoder108"
          >
            {" "}
            GitHub{" "}
          </a>
        }
        for any inquiries or collaboration opportunities. Your feedback and
        contributions are highly appreciated! 🚀{" "}
      </h5>
    </div>
  );
};

export default ContactUs;
