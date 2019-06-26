console.log("app.js is running");

//JSX

var app = {
  title: "Indecision App ",
  subtitle: "put your life in the hands of computer ",
  options: ["One", "Two"]
};

var template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <h1>
      {app.options.length > 0 ? "Here are your Options to work" : "No options"}
    </h1>
  </div>
);

var user = {
  name: "Andreqw",
  age: 26,
  location: "Paris"
};
var userName = "Andrew Rastford";
var userAge = 27;
var userLocation = "Delhi";

var getLocation = location => {
  if (location) {
    return <p>location:{location}</p>;
  } //undefined gets implicitly returned
};
let count = 0;
console.log(this);
const addOne = () => {
  count += 1;
  renderApp(template2);
};

const removeOne = () => {
  count -= 1;
  renderApp(template2);
};

const reset = () => {
  count = 0;
  renderApp(template2);
};

var template2 = (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne}>AddOne</button>
    <button onClick={removeOne}>RemoveOne</button>
    <button onClick={reset}>Reset</button>
  </div>
);

var appRoot = document.getElementById("app");
var appBase = document.getElementById("base");

ReactDOM.render(template, appRoot);
ReactDOM.render(template2, appBase);

const renderApp = template2 => {
  let template = template2;
  ReactDOM.render(template, appBase);
};
