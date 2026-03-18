// BEGIN
export default function getSuperSeriesWinner(scores) {
  let canadaWins = 0;
  
  for (const game of scores) {
    const canadaScore = game[0];
    const ussrScore = game[1];
    
    if (canadaScore > ussrScore) {
      canadaWins = canadaWins + 1;
    } else if (ussrScore > canadaScore) {
      canadaWins = canadaWins - 1;
    }
  }
  
  if (canadaWins > 0) {
    return 'canada';
  } else if (canadaWins < 0) {
    return 'ussr';
  } else {
    return null;
  }
}
// END