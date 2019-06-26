// stateless functional component
import React from "react";
import ReactDOM from "react-dom";
//import IndecisionApp from "./components/IndecisionApp";

const Layout = props => {
  return (
    <div>
      <p>header</p>
      {props.children}
      <p>Footer</p>
    </div>
  );
};

const template = (
  <div>
    <h1>Page Title</h1>
    <p>This is my page</p>
  </div>
);

//ReactDOM.render(<Layout content={template} />, document.getElementById("app"));
ReactDOM.render(
  <Layout>
    <div>
      <h1>Page Title</h1>
      <p>This is my page</p>
    </div>
  </Layout>,
  document.getElementById("app")
);

class OldSyntax {
  constructor() {
    this.name = "mike";
  }
}

const oldsyntax = new OldSyntax();
console.log(oldsyntax);

class NewSyntax {
  name = "Jen";
}
const newSyntax = new NewSyntax();
console.log(newSyntax);
