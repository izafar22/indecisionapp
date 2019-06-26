const appRoot = document.getElementById("app");
let visibility = false;
const visibilityDetails = () => {
  visibility = !visibility;
  // if (visibility) {
  //   detailVisibility = true;
  // } else {
  //   detailVisibility = false;
  // }
  render();
};

let details = "Hey I am happy to see u.";
const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={visibilityDetails}>
        {visibility ? "hide details" : "Show details"}
      </button>
      {visibility && <p>Het these are some details u can see</p>}
    </div>
  );

  ReactDOM.render(template, appRoot);
};
render();
