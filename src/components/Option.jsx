import React, { Component } from "react";

class Options extends Component {
  render() {
    const { options, selectedOption, onOptionChange } = this.props;
    return options.map((option, idx) => (
      <label className="option-label" key={idx}>
        <input
          type="radio"
          name="option"
          value={option}
          checked={selectedOption === option}
          onChange={onOptionChange}
        />
        <span>{option}</span>
      </label>
    ));
  }
}

export default Options;
