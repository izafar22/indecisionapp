import React from "react";
import AddOption from "./AddOption";
import Options from "./Options";
import Header from "./Header";
import Action from "./Action";
import OptionModal from "./OptionModal";

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };

  // constructor(props) {
  //   super(props);
  //   this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
  //   this.pickOneOperation = this.pickOneOperation.bind(this);
  //   this.handleAddOption = this.handleAddOption.bind(this);
  //   this.handleDeleteOptionSingular = this.handleDeleteOptionSingular.bind(
  //     this
  //   );
  // }
  //handle add option
  handleAddOption = value => {
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
  };
  //lifecycle method
  componentDidMount = () => {
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
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
      console.log("saving data");
    }
  };
  componentWillUnmount = () => {
    console.log("component will unmount");
  };
  //handle delete Options
  handleDeleteOptions = () => {
    // this.setState(() => {
    //   return {
    //     options: []
    //   };
    // });
    this.setState(() => ({
      options: []
    }));
  };

  handleDeleteOptionSingular = option => {
    console.log("Hod", option);
    this.setState(prevState => ({
      options: prevState.options.filter(item => item !== option)
    }));
  };
  template;
  pickOneOperation = () => {
    let random = Math.floor(Math.random() * this.state.options.length);
    this.template = <p>{this.state.options[random]}</p>;
    this.openModal();
  };

  openModal = () => {
    this.setState(() => ({
      selectedOption: true
    }));
  };

  closeModal = () => {
    this.setState(() => ({
      selectedOption: undefined
    }));
  };

  render() {
    const title = "Indecison";
    const subTitle = "Put your life in the hands of computer";
    const options = ["thing one", "thing two", "thing four"];
    return (
      <div>
        <Header title={title} subTitle={subTitle} />
        <div className="container">
          <Action
            pickOneOperation={this.pickOneOperation}
            hasOptions={this.state.options.length > 0}
          />
          <div className="widget">
            <Options
              handleDeleteOptions={this.handleDeleteOptions}
              options={this.state.options}
              handleDeleteOptionSingular={this.handleDeleteOptionSingular}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
        </div>
        <OptionModal
          select={this.state.selectedOption}
          closeModal={this.closeModal}
        >
          {this.template}
        </OptionModal>
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
};
