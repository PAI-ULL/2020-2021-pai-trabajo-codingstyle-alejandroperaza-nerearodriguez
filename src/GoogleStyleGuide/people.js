/**
 * University of La Laguna
 * ESIT (Escuela Superior de Ingeniería y Tecnología)
 * Degree of Computer Engineering
 * Interactive Application Programming
 * 
 * @author Alejandro Peraza González
 * @author Nerea Rodríguez Hernández
 * @date 28 February 2021
 * @brief How to correctly implemente Class according to the Google Style Guide
 * 
 * @see https://google.github.io/styleguide/jsguide.html#features-classes
 */

/**
 * First letter of class name capitalized
 */
class People {
  // Blocks must be indented with two spaces
  People(name) {
    this.name = name;
  }

  name() {
    return this.name;
  }

  // Function name must follow the lowerCamelCase
  reallyLongFuctionName(date) {
    let stringDate = ' ';
    stringDate = 'Is a special day because today ' 
                  + date + 'my sister had a baby'; // limit of 80 characters
    return stringDate;
  }
}
