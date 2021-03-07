/**
 * University of La Laguna
 * ESIT (Escuela Superior de Ingeniería y Tecnología)
 * Degree of Computer Engineering
 * Interactive Application Programming
 * 
 * @author Alejandro Peraza González
 * @author Nerea Rodríguez Hernández
 * @date 28 February 2021
 * @brief How to name constants following the Google Style Guide
 * 
 * @see https://google.github.io/styleguide/jsguide.html#features-classes
 * @see https://google.github.io/styleguide/jsguide.html#naming-constant-names
 * @see https://en.wikipedia.org/wiki/Gravity#Newton's_theory_of_gravitation
 */

/**
 * @constant {number} GRAVITATIONAL gravitational constant used to calculate the Force
 */
const GRAVITATIONAL = 6.67 * Math.pow(10, -11);

/**
 * Function that returns the force using Newton's equation 
 * @param {number} firstMass Mass of one of the object interacting 
 * @param {number} secondMass Mass of one of the other object interacting 
 * @param {number} radius Distance between the center of masses 
 * @returns {number} Result force
 */
function force(firstMass, secondMass, radius) {
  return (GRAVITATIONAL * firstMass * secondMass) / (Math.pow(radius, 2));
}
