/* Functional Programing - Free Code Camp */
/**
 * A long process to prepare Green tea.
 * @return {string} A cup of green tea.
 */
const prepareGreenTea = () => 'greenTea';

/**
 * Get given number of cups of tea.
 * @param {number} numOfCups Number of required cups of tea.
 * @return {Array<string>} Given amount of tea cups.
 */
const getGreenTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups++){
    const teaCup = prepareGreenTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};
const tea4teamFCC = getGreenTea(10);

console.log(tea4teamFCC);

// Now let's make our (getGreenTea) function more flexible
/**
 * A long process to prepare black tea.
 * @return {string} A cup of black tea.
 */
const prepareBlackTea = () => 'blackTea';

/**
 * Get given number of cups of tea.
 * @param {function(): string} prepareTea the type of tea preparing function
 * @param {number} numOfCups Number of required cups of tea.
 * @return {Array<string>} Given amount of tea cups.
 */
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];
  for(let cups = 1; cups <= numOfCups; cups++){
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};
// Now let's prepare 5 cups of Green tea, and 7 of balck tea.
const greenTea4Team = getTea(prepareGreenTea, 5);
console.log(greenTea4Team);
const blackTea4Team = getTea(prepareBlackTea, 7);
console.log(blackTea4Team);