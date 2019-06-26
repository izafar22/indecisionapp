class ComponentCounter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    try {
      const stringCount = localStorage.getItem("count");
      const count = parseInt(stringCount, 10);
      if (!isNaN(count)) {
        this.setState(() => ({ count: count }));
      }
    } catch (e) {
      //nothing to do
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      localStorage.setItem("count", this.state.count);
    }
  }

  handleAddOne() {
    console.log("handleOne");
    this.setState(prevState => {
      console.log(this.state.count);
      return {
        count: prevState.count + 1
      };
    });
  }

  handleMinusOne() {
    console.log("handleMinus one");
    this.setState(prevState => {
      console.log(this.state.count);
      return {
        count: prevState.count - 1
      };
    });
  }

  handleReset() {
    console.log("handlereset");
    this.setState(prevState => {
      console.log(this.state.count);
      return {
        count: 0
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Count :{this.state.count} </h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}

ReactDOM.render(<ComponentCounter />, document.getElementById("app"));

// console.log("app.js is running");

// //JSX

// var app = {
//  title: "Indecision App ",
//  subtitle: "put your life in the hands of computer ",
//  options: ["One", "Two"]
// };

// var template = (
//  <div>
//   <h1>{app.title}</h1>
//   {app.subtitle && <p>{app.subtitle}</p>}
//   <h1>
//    {app.options.length > 0 ? "Here are your Options to work" : "No options"}
//   </h1>
//  </div>
// );

// var user = {
//  name: "Andreqw",
//  age: 26,
//  location: "Paris"
// };
// var userName = "Andrew Rastford";
// var userAge = 27;
// var userLocation = "Delhi";

// var getLocation = location => {
//  if (location) {
//   return <p>location:{location}</p>;
//  } //undefined gets implicitly returned
// };
// let count = 0;
// console.log(this);
// const addOne = () => {
//  count += 1;
//  renderApp(template2);
// };

// const removeOne = () => {
//  count -= 1;
//  renderApp(template2);
// };

// const reset = () => {
//  count = 0;
//  renderApp(template2);
// };

// var template2 = (
//  <div>
//   <h1>Count: {count}</h1>
//   <button onClick={addOne}>AddOne</button>
//   <button onClick={removeOne}>RemoveOne</button>
//   <button onClick={reset}>Reset</button>
//  </div>
// );

// var appRoot = document.getElementById("app");
// var appBase = document.getElementById("base");

// ReactDOM.render(template, appRoot);
// ReactDOM.render(template2, appBase);

// const renderApp = template2 => {
//  let template = template2;
//  ReactDOM.render(template, appBase);
// };
