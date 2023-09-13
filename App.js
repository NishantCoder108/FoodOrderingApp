import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  return <h1>React Title </h1>;
};

const ReactComponent = () => (
  <div>
    <Title />
    React ReactComponent
  </div>
);

// React Element | JSX Element
const jsxHeading = <h1 id="heading">Namaste React 🚀</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ReactComponent />);
