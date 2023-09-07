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

const parent = React.createElement(
  "h1",
  { id: "parent" },
  React.createElement("div", { id: "child" }, "Child Element")
);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
