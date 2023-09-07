/**
 *
 * const parent = React.createElement("h1",{id:"parent"},React.createElement("div",{id:"child"}, "Child Element"))
 *
 *
 *
 *
 *
 */

// const heading = React.createElement(
//   "h1",
//   { id: "heading",xyz:"abc" }, //atttribute
//   "Hello World from React CDN"
// );

const parent = React.createElement("h1", { id: "parent" }, "Parent Element", [
  React.createElement("div", { id: "child" }, "Children Element 1", [
    // for more than nested children in parent for that we use array []
    React.createElement("h2", { id: "child1" }, "Child 1"),
    React.createElement("h2", { id: "child1" }, "Child 2"),
  ]),
  React.createElement("div", { id: "child" }, "Children Element 2", [
    // for more than nested children in parent for that we use array []
    React.createElement("h2", { id: "child1" }, "Child 1"),
    React.createElement("h2", { id: "child1" }, "Child 2"),
  ]),
]);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
