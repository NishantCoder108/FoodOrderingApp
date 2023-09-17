import { Component } from "react";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount");
  }
  render() {
    console.log("Parent Render");
    return (
      <div className="about">
        <div>
          <h2>Nishant Kumar</h2>
          <h2>Web Engineer</h2>
          <h2> Frontend Expert | React | JavaScript | TypeScript </h2>
        </div>

        <UserClass name="Akshay" course="JavaScript" />
        {/* <UserClass name="Elon" course="Spaceship" /> */}
      </div>
    );
  }
}
export default About;
