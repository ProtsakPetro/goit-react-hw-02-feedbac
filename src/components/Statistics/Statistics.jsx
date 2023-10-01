import { StatisticsItem } from "./Statistics.styled"

const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
  return (<>
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
        <p>TOTAL: {total(good, neutral, bad)}</p>
      </StatisticsItem>
            <StatisticsItem>
        <p>POSITIVE PERCENTAGE: {positivePercentage(good, bad)}</p>
        </StatisticsItem>
    </ul>
  </>
  )
}

export default Statistics