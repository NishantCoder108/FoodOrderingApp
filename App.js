import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement ===> Object ===> render(HTML Element)
const heading = React.createElement("h1", { id: "heading" }, "Heading");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
