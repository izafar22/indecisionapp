// stateless functional component

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.pickOneOperation = this.pickOneOperation.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOptionSingular = this.handleDeleteOptionSingular.bind(
      this
    );
    this.state = {
      options: []
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
    // this.setState(prevState => {
    //   return {
    //     options: prevState.options.concat(value)
    //   };
    // });
    this.setState(prevState => ({
      options: [...prevState.options, value]
    }));
  }
  //lifecycle method
  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);
      console.log("dtata mounted");
      if (options) {
        this.setState(() => ({ options: options }));
      }
    } catch (e) {
      //nothing at all
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
      console.log("saving data");
    }
  }
  componentWillUnmount() {
    console.log("component will unmount");
  }
  //handle delete Options
  handleDeleteOptions() {
    // this.setState(() => {
    //   return {
    //     options: []
    //   };
    // });
    this.setState(() => ({
      options: []
    }));
  }

  handleDeleteOptionSingular(option) {
    console.log("Hod", option);
    this.setState(prevState => ({
      options: prevState.options.filter(item => item !== option)
    }));
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
          handleDeleteOptionSingular={this.handleDeleteOptionSingular}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
};

const Header = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subTitle && <h2>{props.subTitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: "Indecison"
};

// class Header extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.subTitle}</h2>
//       </div>
//     );
//   }
// }

const Action = props => {
  return (
    <div>
      <button disabled={!props.hasOptions} onClick={props.pickOneOperation}>
        What should I do
      </button>
    </div>
  );
};

// class Action extends React.Component {
//   render() {
//     return (
//       <div>
//         <button
//           disabled={!this.props.hasOptions}
//           onClick={this.props.pickOneOperation}
//         >
//           What should I do
//         </button>
//       </div>
//     );
//   }
// }

const Options = props => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.length === 0 && <p>Plead add options to get started!</p>}
      {props.options.map(option => {
        return (
          <Option
            key={option}
            option={option}
            handleDeleteOptionSingular={props.handleDeleteOptionSingular}
          />
        );
      })}
    </div>
  );
};

// class Options extends React.Component {
//   render() {
//     return (
//       <div>
//         <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//         {this.props.options.map(option => {
//           return <Option key={option} option={option} />;
//         })}
//       </div>
//     );
//   }
// }

//
const Option = props => {
  return (
    <div>
      {props.option}
      <button onClick={e => props.handleDeleteOptionSingular(props.option)}>
        remove
      </button>
    </div>
  );
};
// class Option extends React.Component {
//   render() {
//     return <div>{this.props.option}</div>;
//   }
// }

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
    const error = this.props.handleAddOption(value);
    this.setState(() => {
      return {
        error
      };
    });
    if (!error) {
      e.target.elements.option.value = "";
    }
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
const User = props => {
  return (
    <div>
      <p>Name:{props.name}</p>
      <p>Age:{props.age}</p>
    </div>
  );
};

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
