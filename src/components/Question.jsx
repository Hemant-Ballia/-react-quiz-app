import React, { Component } from "react";
import Options from "./Option.jsx";

class Question extends Component {
  render() {
    const { question, current, total, selectedOption, onOptionChange, onSubmit } = this.props;
    return (
      <>
        <div className="question-progress">
          Question {current} of {total}
        </div>
        <div className="question-title">{question.question}</div>
        <form onSubmit={onSubmit}>
          <div className="option-group">
            <Options
              options={question.options}
              selectedOption={selectedOption}
              onOptionChange={onOptionChange}
            />
          </div>
          <button type="submit" disabled={!selectedOption}>
            SUBMIT
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </form>
      </>
    );
  }
}

export default Question;
