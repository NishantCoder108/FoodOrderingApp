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

        <UserClass name="First" course="JavaScript" />
        <UserClass name="Second" course="Spaceship" />
      </div>
    );
  }
}
export default About;

/**
 * Parent Constructor
 * Parent Render
 * First Child Constructor
 * first child Render
 * Second Child constructor
 * Second child render
 * First child componentDidMount
 * Second child componentDidMount
 * Parent child componentDidmount
 *
 * it have two phase , First Render Phase ,so it first render the component and Second phase is Commit Phase , in second phase , it call to ComponentDidMount , where we can api call
 */
