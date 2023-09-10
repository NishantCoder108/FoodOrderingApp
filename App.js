import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h2", {}, "Child 1"),
    React.createElement("h2", {}, "Child 2"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h2", {}, "Child 1"),
    React.createElement("h2", {}, "Child 2"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
