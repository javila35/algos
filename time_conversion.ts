// https://www.hackerrank.com/challenges/time-conversion/problem

/**
 * The string is always the same format.
 *
 * I only need to pay attention to the first two characters and the last two characters
 * There are 10 characters total.
 * I need to update characters 0 & 1 based on characters 8 & 9.
 */

const input = "12:45:54PM";

function convertTime(s: string) {
  const isNight = s.includes("PM"),
    unchangedText = s.substring(2, 8);
  let hourText = s.substring(0, 2);

  if (isNight && hourText === "12") {
    return hourText + unchangedText;
  }  else if (isNight) {
    hourText = (parseInt(hourText) + 12).toString();
  } else if (!isNight && hourText === "12") {
    hourText = "00";
  } 

  return hourText + unchangedText;
}

console.log(convertTime(input));
