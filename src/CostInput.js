import React from "react";

export default class CostInput extends React.Component {
  state = {
    value: ""
  };

  removeDollarSign = value => (value[0] === "$" ? value.slice(1) : value);
  getReturnValue = value => (value === "" ? "" : `$${value}`);
  handleChange = ev => {
    ev.preventDefault();
    const inputtedValue = ev.currentTarget.value;
    const noDollarSign = this.removeDollarSign(inputtedValue);
    if (isNaN(noDollarSign)) return;
    this.setState({ value: this.getReturnValue(noDollarSign) });
  };

  render() {
    return (
      <input
        style={{ fontSize: "3vh" }}
        value={this.state.value}
        aria-label="cost-input"
        onChange={this.handleChange}
      />
    );
  }
}

const setup = () => {
  const utils = render(<CostInput />);
  const input = utils.getByLabelText("cost-input");
  return {
    input,
    ...utils
  };
};
