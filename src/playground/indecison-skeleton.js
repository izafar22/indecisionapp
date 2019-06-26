const app = {
  title: "Indecision App ",
  subtitle: "put your life in the hands of computer ",
  options: ["One", "Two"]
};

var appRoot = document.getElementById("app");

const onFormSubmit = e => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
  }
  e.target.elements.option.value = "";
  renderApp();
};
const removeAll = () => {
  app.options = [];
  randomTask = "";
  renderApp();
};
let randomTask = "";
const operationexecute = () => {
  const randomindex = Math.floor(Math.random() * app.options.length);
  randomTask = app.options[randomindex];
  renderApp();
};

const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <h1>{app.options.length > 0 ? "Here are your options" : "No options"}</h1>
      <button disabled={app.options.length === 0} onClick={operationexecute}>
        what should i do?
      </button>
      <button onClick={removeAll}>RemoveAll</button>
      <p>{[randomTask]}</p>

      <ol>
        {app.options.map(opt => {
          return <li>item {opt}</li>;
        })}
      </ol>
      <form onSubmit={onFormSubmit} action="">
        <input type="text" name="option" />
        <button>Submit</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

renderApp();
