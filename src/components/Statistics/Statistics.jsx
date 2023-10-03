import { StatisticsItem } from "./Statistics.styled";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <ul>
        <StatisticsItem>
          <p>GOOD: {good}</p>
        </StatisticsItem>
        <StatisticsItem>
          <p>NEUTRAL: {neutral}</p>
        </StatisticsItem>
        <StatisticsItem>
          <p>BAD: {bad}</p>
        </StatisticsItem>
        <StatisticsItem>
          <p>TOTAL: {total}</p> {/* Змініть на просте використання властивості total */}
        </StatisticsItem>
        <StatisticsItem>
          <p>POSITIVE PERCENTAGE: {positivePercentage}</p> {/* Змініть на просте використання властивості positivePercentage */}
        </StatisticsItem>
      </ul>
    </>
  );
};

export default Statistics;