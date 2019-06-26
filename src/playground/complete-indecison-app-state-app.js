class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.pickOneOperation = this.pickOneOperation.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: ["thing one", "thing two", "thing four"]
    };
  }
  //handle add option
  handleAddOption(value) {
    console.log("indecision", value);
    if (!value) {
      return "Enter Valid value to add item";
    } else if (this.state.options.indexOf(value) > -1) {
      return "This option already exists";
    }
    this.setState(prevState => {
      return {
        options: [...prevState.options, value]
      };
    });
  }

  //handle delete Options
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }

  pickOneOperation() {
    let random = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[random]);
  }

  render() {
    const title = "Indecison";
    const subTitle = "Put your life in the hands of computer";
    const options = ["thing one", "thing two", "thing four"];
    return (
      <div>
        <Header title={title} subTitle={subTitle} />
        <Action
          pickOneOperation={this.pickOneOperation}
          hasOptions={this.state.options.length > 0}
        />
        <Options
          handleDeleteOptions={this.handleDeleteOptions}
          options={this.state.options}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subTitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button
          disabled={!this.props.hasOptions}
          onClick={this.props.pickOneOperation}
        >
          What should I do
        </button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
        {this.props.options.map(option => {
          return <Option key={option} option={option} />;
        })}
      </div>
    );
  }
}

//
class Option extends React.Component {
  render() {
    return <div>{this.props.option}</div>;
  }
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }

  handleAddOption(e) {
    e.preventDefault();
    let value = e.target.elements.option.value.trim();
    console.log("---", value);
    e.target.elements.option.value = "";
    const error = this.props.handleAddOption(value);
    this.setState(() => {
      return {
        error
      };
    });
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" className="type" name="option" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

// const jsx = (
//   <div>
//     <Header />
//     <Action />
//     <Options />
//     <AddOption />
//   </div>
// );

ReactDOM.render(
  <div>
    <IndecisionApp />
  </div>,
  document.getElementById("app")
);
