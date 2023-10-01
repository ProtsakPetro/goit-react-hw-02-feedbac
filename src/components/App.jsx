import React, { Component } from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
import Statistics from "./Statistics/Statistics";
import { Container } from "./index.styled";
import Notification from "./Notification/Notification";

class App extends Component {
  state = {
    LIKE: 0,
    NEUTRAL: 0,
    DISLIKE: 0
  };

  countTotalFeedback = () => {
    const { LIKE, NEUTRAL, DISLIKE } = this.state;
    return LIKE + NEUTRAL + DISLIKE;
  };

  countPositiveFeedbackPercentage = () => {
    const { LIKE } = this.state;
    const total = this.countTotalFeedback();
    const percentage = total === 0 ? 0 : (LIKE / total) * 100;
    return Math.round(percentage) + "%";
  };

  handleFeedback = (e) => {
    const buttonName = e.target.textContent;
    this.setState((prevState) => ({
      [buttonName]: prevState[buttonName] + 1
    }));
  };

  render() {
    const { LIKE, NEUTRAL, DISLIKE } = this.state;
    return (
      <Container>
        <Section title="SHARE YOUR EXPERIENCES">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        <Section title="STATISTIC">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              LIKE={LIKE}
              NEUTRAL={NEUTRAL}
              DISLIKE={DISLIKE}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="THERE IS NO FEEDBACK" />
          )}
        </Section>
      </Container>
    );
  }
}

export default App;