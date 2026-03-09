import { getScoreStatus } from "../../utils/stats";

function StatsProgress({score}) {

  // const score = 65;

  const { status, color } = getScoreStatus(score);
console.log(score)
  return (
    <div>

      <h3>Editor Score</h3>
      <h2>{score}</h2>

      <div style={{width:"100%",height:"8px",background:"#ddd"}}>
        <div
          style={{
            width:`${score}%`,
            height:"8px",
            background:color
          }}
        ></div>
      </div>

      <p style={{color}}>Status: {status}</p>

    </div>
  );
}

export default StatsProgress;