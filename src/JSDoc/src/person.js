/**
 * University of La Laguna
 * ESIT (Escuela Superior de Ingeniería y Tecnología)
 * Degree of Computer Engineering
 * Interactive Application Programming
 *
 * @author Alejandro Peraza González
 * @author Nerea Rodríguez Hernández
 * @date 28 February 2021
 * @description Docummenting a class using JsDoc
 *
 * @see https://github.com/bradtraversy/jsdoc-examples
 */

/**
 * Class to create a person object
 * @class
 * @example 
 * const ALEJANDRO = new Person({
 *   name: 'Alejandro Peraza',
 *   age: 20
 * });
 * ALEJANDRO.greet();
 */
class Person {
  /**
   * Constructor of the class person
   * @param {Object} personInfo Information about the person
   * @property {string} name Persons name
   * @property {Number} age Persons age
   */
  constructor(personInfo) {
    this.name = personInfo.name;
    this.age = personInfo.age;
  }

  /**
   * Function that makes a person greet
   * @returns void
   */
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age}`);
  }
}

/**
 * Person created with an object given to the 
 * constructor of the class {@link Person}
 * @property {string} name Name of the person
 * @property {number} age Age of the person
 * @type {Person}
 */
const NEREA = new Person({
  name: 'Nerea Rodríguez',
  age: 20
});

NEREA.greet();
