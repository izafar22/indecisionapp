class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.visibilityDetails = this.visibilityDetails.bind(this);
    this.state = {
      visibility: false
    };
  }

  visibilityDetails() {
    this.setState(prevState => {
      return {
        visibility: !prevState.visibility
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.visibilityDetails}>
          {this.state.visibility ? "hide details" : "Show details"}
        </button>
        {this.state.visibility && <p>Hey these are some details u can see</p>}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));
