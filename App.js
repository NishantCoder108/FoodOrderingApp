import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement ===> Object ===> render(HTML Element)
const heading = React.createElement("h1", { id: "heading" }, "Heading");

// JSX is like HTML element , not HTML element

/**
 * Babel convert JSX to Pure React Element .it also called Transpiler or JS Compiler that oldest browser can understand
 *
 */

const jsxHeading = <h1 id="heading">Namaste React 🚀</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
