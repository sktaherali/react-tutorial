const headingChild = React.createElement("h1", { id: "heading" }, "Hello World 1");
const headingChild1 = React.createElement("h1", { id: "heading1" }, "Hello World 1");

const heading = React.createElement("div", { id: "heading" },  [headingChild,headingChild1]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
