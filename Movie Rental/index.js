// Movie Class
class Movie {

  constructor (title, rating) {
    this.title = title
    this.rating = rating
    this.isAvailable = true
  }

  //method to check if movie is available
  checkAvailability () {
    return this.isAvailable ? `${this.title} is available` : `${this.title} is not available`
  }

  //method to rent movie
  rentMovie() {
    if (this.isAvailable) {
      this.isAvailable = false
      return `${this.title} has been rented out`
    } else {
      return `${this.title} is not available for rent`
    }
  }

 // movie is returned
  returnMovie() {
    this.isAvailable = true
    return `${this.title} has been returned` 
  }
}

     
// Customer Class
class Customer {
  constructor (name, age) {
    this.name = name
    this.age = age
  }
}

// method to check if customer is old enough to rent movie
canRentMovie(movie) {
  if(movie.rating >= customer.age) {
    return `${this.name} can rent the movie "${movie.title}".`
  } else {
    return `${this.name} cannot rent the movie "${movie.title}" due to age restrictions.`
  }

  //method too return movie
  returnMovie(movie) {
    if (!movie.isAvailable) {
      return movie.returnMovie();
    } else {
      return `${this.name} cannot return "${movie.title}" as it was not rented out.`
}


//example
const movie1 = new Movie ("Deadpool", 18)
const movie2 = new Movie ("Pokemon", 12)

const customer1 = new Customer ("John", 17)
const customer2 = new Customer ("Doe", 16)

// Check availability of movies
console.log(movie1.checkAvailability()); // Deadpool is available.
console.log(movie2.checkAvailability()); // Pokemon is available.


// Rent a movie
console.log(movie2.rentMovie()); // Pokemon has been rented out.
console.log(movie2.checkAvailability()); // Pokemon is not available.

// Attempt to return the movie
console.log(customer2.returnMovie(movie2)); // Pokemon has been returned and is now available.
console.log(movie2.checkAvailability()); // Pokemon is available again.

// Trying to return a movie that's already available
console.log(customer1.returnMovie(movie2)); // John cannot return "Pokemon" as it was not rented out.
