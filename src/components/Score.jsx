import React, { Component } from "react";

class Score extends Component {
  getFeedbackEmoji(score, total) {
    if (score === total) return "🏆";
    if (score >= total * 0.7) return "🎉";
    if (score >= total * 0.4) return "🙂";
    return "🙁";
  }

  getFeedbackText(score, total) {
    if (score === total) return "Perfect! All correct.";
    if (score >= total * 0.7) return "Great job!";
    if (score >= total * 0.4) return "Not bad, keep practicing!";
    return "Try again for a better score!";
  }

  render() {
    const { score, totalQuestions } = this.props;
    const emoji = this.getFeedbackEmoji(score, totalQuestions);
    const feedback = this.getFeedbackText(score, totalQuestions);

    return (
      <div className="score">
        <div style={{ fontSize: "2.7rem", marginBottom: "12px" }}>{emoji}</div>
        <div style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "8px" }}>
          Results
        </div>
        <div style={{ fontSize: "1.23rem", marginBottom: "14px" }}>
          {feedback}
        </div>
        <div>
          <span style={{ fontWeight: 600, fontSize: "1.23rem" }}>
            {score}
          </span>
          {" "}out of{" "}
          <span style={{ fontWeight: 600, fontSize: "1.23rem" }}>
            {totalQuestions}
          </span>{" "}
          correct
        </div>
      </div>
    );
  }
}

export default Score;
