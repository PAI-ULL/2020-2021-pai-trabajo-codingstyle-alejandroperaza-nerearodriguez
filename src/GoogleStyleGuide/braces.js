/**
 * University of La Laguna
 * ESIT (Escuela Superior de Ingeniería y Tecnología)
 * Degree of Computer Engineering
 * Interactive Application Programming
 *  
 * @author Alejandro Peraza González
 * @author Nerea Rodríguez Hernández
 * @date 28 February 2021
 * @brief How to correctly use braces according to the Google Style Guide
 * 
 * @see https://google.github.io/styleguide/jsguide.html#formatting-braces
 */

/**
 * Braces are used for all control structures.
 * Braces follow the egyptian brackets style.
 * First Example:
 */
let pretty = new Boolean(false); //One statement per line

if (pretty == false) {
  consologe.log("You are not pretty.");
}

/**
 * Every statement must be terminated with semicolon.
 * Second Example:
 */
let sum = 0; 

for (let i = 0; i < 10; i++) {
  sum++;
}

/**
 * Empty Blocks may be concise.
 * Do this:
 */
function doNothing() {}

// Do not do this:
function doNothing1() {

}

// And do not do this either:
try {

} catch(sum) {}

