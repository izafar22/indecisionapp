class IndecisionApp extends React.Component {
  render() {
    const title = "Indecison";
    const subTitle = "Put your life in the hands of computer";
    const options = ["thing one", "thing two", "thing four"];
    return (
      <div>
        <Header title={title} subTitle={subTitle} />
        <Action />
        <Options options={options} />
        <AddOption />
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
  handlePick() {
    alert("handlePick");
  }

  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do</button>
      </div>
    );
  }
}

class Options extends React.Component {
  handleRemoveAll() {
    alert("ahndleRemoveAll");
  }

  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove All</button>
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
  handleAddOption = e => {
    e.preventDefault();
    let value = e.target.elements.option.value.trim();
    console.log("---", value);
    if (value) {
      alert(`the value is :${value}`);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleAddOption}>
        <input type="text" className="type" name="option" />
        <button type="submit">Submit</button>
      </form>
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
