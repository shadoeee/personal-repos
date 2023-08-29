class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static getPG(movieArray) {
        return movieArray.filter(movie => movie.rating === "PG");
    }
}

// Creating an instance of the Movie class with the specified properties
const casinoRoyale = new Movie('Casino Royale', 'Eon Productions', 'PG-13');

// Creating an array of Movie instances
const movies = [
    new Movie('Inception', 'Warner Bros.', 'PG'),
    new Movie('The Dark Knight', 'Warner Bros.', 'PG-13'),
    new Movie('Finding Nemo', 'Pixar', 'G'),
    new Movie('Shrek', 'DreamWorks', 'PG')
];

// Using the getPG method to filter movies with a rating of "PG"
const pgMovies = Movie.getPG(movies);

console.log('Movie Title:', casinoRoyale.title);
console.log('Studio:', casinoRoyale.studio);
console.log('Rating:', casinoRoyale.rating);

console.log('PG Movies:', pgMovies);
