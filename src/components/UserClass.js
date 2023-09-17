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
  }

  render() {
    const { name, course } = this.props;
    const { count } = this.state;
    return (
      <div className="userClass">
        <h2>{name}</h2>
        <h2>Courses : {course}</h2>
        <h2> Number Of Courses: {count} </h2>
        <button
          onClick={() => {
            this.setState(() => {
              return (this.state.count = this.state.count + 1);
            });
          }}
        >
          Increase Count
        </button>
      </div>
    );
  }
}

export default UserClass;
