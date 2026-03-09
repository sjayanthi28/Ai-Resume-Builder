export function getScoreStatus(score) {

  if (score <= 40) {
    return { status: "Average", color: "red" };
  } 
  else if (score <= 70 && score > 40) {
    return { status: "Good", color: "orange" };
  } 
  else {
    return { status: "Excellent", color: "green" };
  }

}