import { Component } from "react";
import UserContext from "../utils/userContext";

class UserClass extends Component {
  //constructor is used for initializes the property of object and state
  // super keyword is user for ,calling parent member class , from child  class and access data
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 9,
    };

    console.log(this.props.name + "Child Constructor");
  }

  componentDidMount() {
    console.log(this.props.name + "Child Component Did Mount");

    // this.timer = setInterval(() => {
    //   console.log("count");
    // }, 1000);
  }

  componentDidUpdate() {
    // console.log("Component Did Update");
  }

  componentWillUnmount() {
    clearInterval(this.timer);

    console.log("Component Will Unmount");
    // when go to current page to other page , then it will call . it is used for cleanup code.
  }
  render() {
    console.log(this.state.count);
    // console.log(this.props.name + "child Render");
    const { name, course } = this.props;
    const { count, count2 } = this.state;
    return (
      <div className="flex justify-center align-middle flex-col items-center gap-2">
        <h2>{name}</h2>
        <h2>Courses : {course}</h2>
        <h2> Number Of Courses: {count} </h2>
        <h5>Counting of 9 : {count2} </h5>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
          className="border border-green-500 rounded-md p-2"
        >
          Increase
        </button>

        <span className="font-thin">
          Note :- It is comming from User Context from Class component :---
        </span>
        <UserContext.Consumer>
          {({ loggedInUser }) => <div>Name : {loggedInUser}</div>}
        </UserContext.Consumer>
      </div>
    );
  }
}

export default UserClass;
