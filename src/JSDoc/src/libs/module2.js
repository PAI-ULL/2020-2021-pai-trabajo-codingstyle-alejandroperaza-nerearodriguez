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
 * @brief Module that contains the addition and a constant array
 * @module module2
 */

/**
 * Addition function
 * @param {Number} summand_1 first summand
 * @param {Number} summand_2 second summand
 * @return {Number} result after addding summand_1 to summand_2
 */
const add = function (summand_1, summand_2) {
  let sum = summand_1 + summand_2;
  return sum
};

/**
 * Array that contains possible object identifiers
 * @type {Array<Number | string>}
 */
const identifiers = [1, 2, 3, "cow", "rock"];


export { add, identifiers};
