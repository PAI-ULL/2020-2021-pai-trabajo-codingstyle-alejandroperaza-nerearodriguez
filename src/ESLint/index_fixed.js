/**
 * University of La Laguna
 * ESIT (Escuela Superior de Ingeniería y Tecnología)
 * Degree of Computer Engineering
 * Interactive Application Programming
 *
 * @author Alejandro Peraza González
 * @author Nerea Rodríguez Hernández
 * @author Viren Sajju Dhanwani Dhanwani
 * @date 06 March 2021
*  @brief Collatz Conjecture Exercism problem
 *
 * @see https://exercism.io/my/solutions/d4f9e5e35a174beca081a14a2b41f935
 */


/**
 * Function that calculates the steps needed to reach the number 1 applying
 * the Collatz Conjeture from the given number.
 * @param {number} givenNumber Given number to start counting from.
 * @return {number} Steps taken.
 */
function steps(givenNumber) {
  if (givenNumber <= 0) throw new Error('Only positive numbers are allowed');
  let number = givenNumber;
  let numberOfSteps = 0;

  while (number !== 1) {
    ++numberOfSteps;
    if (number % 2 === 0) {
      number /= 2;
    } else {
      number = 3 * number + 1;
    }
  }

  return numberOfSteps;
};

steps();
