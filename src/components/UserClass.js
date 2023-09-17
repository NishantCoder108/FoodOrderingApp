import { Component } from "react";

class UserClass extends Component {
  //constructor is used for initializes the property of object and state
  // super keyword is user for ,calling parent member class , from child  class and access data
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 9,
    };

    console.log("Constructor");
  }

  componentDidMount() {
    console.log("Child Component Did Mount");
  }

  render() {
    console.log("Render");
    const { name, course } = this.props;
    const { count, count2 } = this.state;
    return (
      <div className="userClass">
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
        >
          Increase
        </button>
      </div>
    );
  }
}

export default UserClass;
