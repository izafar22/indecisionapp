import React from "react";

export default class AddOption extends React.Component {
  state = {
    error: undefined
  };
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    // this.state = {
    //   error: undefined
    // };
  }

  handleAddOption(e) {
    e.preventDefault();
    //console.log(testing);
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
        {this.state.error && (
          <p className="add-option-error">{this.state.error}</p>
        )}
        <form className="add-option" onSubmit={this.handleAddOption}>
          <input className="add-option__input" type="text" name="option" />
          <button className="button" type="submit">
            Add Option
          </button>
        </form>
      </div>
    );
  }
}
