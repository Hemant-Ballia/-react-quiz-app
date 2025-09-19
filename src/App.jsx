import React, { Component } from "react";
import "./App.css";
import Question from "./components/Question.jsx";
import qBank from "./components/QuestionBank.jsx";
import Score from "./components/Score.jsx";
import Snackbar from "@mui/material/Snackbar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionBank: qBank,
      currentQuestion: 0,
      selectedOption: "",
      score: 0,
      quizEnd: false,
      snackbarOpen: false,
      snackbarMessage: "",
    };
  }

  handleOptionChange = (e) => {
    this.setState({ selectedOption: e.target.value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { selectedOption } = this.state;
    if (!selectedOption) {
      this.setState({
        snackbarOpen: true,
        snackbarMessage: "Please select an option before submitting.",
      });
      return;
    }
    this.checkAnswer();
    this.handleNextQuestion();
  };

  handleSnackbarClose = () => {
    this.setState({ snackbarOpen: false, snackbarMessage: "" });
  };

  checkAnswer = () => {
    const { questionBank, currentQuestion, selectedOption } = this.state;
    if (selectedOption === questionBank[currentQuestion].answer) {
      this.setState((prevState) => ({ score: prevState.score + 1 }));
    }
  };

  handleNextQuestion = () => {
    const { questionBank, currentQuestion } = this.state;
    if (currentQuestion + 1 < questionBank.length) {
      this.setState({
        currentQuestion: currentQuestion + 1,
        selectedOption: "",
      });
    } else {
      this.setState({ quizEnd: true });
    }
  };

  render() {
    const {
      questionBank,
      currentQuestion,
      selectedOption,
      score,
      quizEnd,
      snackbarOpen,
      snackbarMessage,
    } = this.state;

    return (
      <div>
        <h1 className="app-title">QUIZ APP</h1>
        <main className="quiz-main">
          {!quizEnd ? (
            <Question
              question={questionBank[currentQuestion]}
              current={currentQuestion + 1}
              total={questionBank.length}
              selectedOption={selectedOption}
              onOptionChange={this.handleOptionChange}
              onSubmit={this.handleFormSubmit}
            />
          ) : (
            <Score score={score} totalQuestions={questionBank.length} />
          )}
        </main>
        <Snackbar
          open={snackbarOpen}
          message={snackbarMessage}
          autoHideDuration={2500}
          onClose={this.handleSnackbarClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        />
      </div>
    );
  }
}

export default App;
