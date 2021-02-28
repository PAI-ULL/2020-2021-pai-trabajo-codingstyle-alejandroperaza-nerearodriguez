//@ts-check

/**
 * University of La Laguna
 * ESIT (Escuela Superior de Ingeniería y Tecnología)
 * Degree of Computer Engineering
 * Interactive Application Programming
 *
 * @author Alejandro Peraza González
 * @author Nerea Rodríguez Hernández
 * @date 28 February 2021
 * @description Module that includes some functionality related to Numbers
 * @module module1
 */

/**
 * Square function
 * @param {Number} base_number  Value to be squared
 * @return {Number} The given number squared
 */

const square = (base_number) => {
  return Math.pow(base_number, 2);
}

/**
 * Square root function
 * @param {Number} radicand Number to be rooted
 * @return {Number} Result of the square root
 */
function squareRoot(radicand) {
  return Math.sqrt(radicand);
};


export {square, squareRoot}
