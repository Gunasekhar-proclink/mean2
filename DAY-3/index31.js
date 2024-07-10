const movies = [
    {
        id: 1,
        title: "Baahubali",
        director: "S. S. Rajamouli",
        year: 2015,
        ratings: [8, 9, 10],
        genre: "Action",
    },
    {
        id: 2,
        title: "Arjun Reddy",
        director: "Sandeep Reddy Vanga",
        year: 2017,
        ratings: [9, 8, 9],
        genre: "Drama",
    },
    {
        id: 3,
        title: "Mahanati",
        director: "Nag Ashwin",
        year: 2018,
        ratings: [10, 9, 8],
        genre: "Biography",
    },
    {
        id: 4,
        title: "Eega",
        director: "S. S. Rajamouli",
        year: 2012,
        ratings: [7, 8, 9],
        genre: "Fantasy",
    },
    {
        id: 5,
        title: "Jersey",
        director: "Gowtam Tinnanuri",
        year: 2019,
        ratings: [9, 9, 8],
        genre: "Sports",
    },
];

// Q10. Write a function that finds a movie by id and returns its title and genre in a formatted string

function getMovieDetails(userId) {
    const movie1 = movies.find(m => m.id === userId);
    if (!movie1) {
        return "Movie not found";
    }
    else {
        return `${movie1.title} is an ${movie1.genre} movie`;
    }
}

console.log(getMovieDetails(1)); // Should print: Baahubali is an Action movie
console.log(getMovieDetails(5)); // Should print: Jersey is a Sports movie
console.log(getMovieDetails(6)); // Should print: Movie not found


// Q11. Write a function that filters out movies released before a certain year and calculates the average rating of the remaining movies (Rating must be rounded)


// console.log(getAverageRatingAfterYear(2016)); // Should print: 8.83 (average rating of Arjun Reddy, Mahanati, and Jersey)
// console.log(getAverageRatingAfterYear(2020)); // Should print: No movies after the specified year


// Q12: Write a function that checks if all movies of a certain genre have ratings above a certain value
function allRatingsAboveForGenre(minRating, genre) {
    const genreMovies = movies.filter((movie) => movies.genre === genre);
    const allAboveRating = genreMovies.every((movie) => movies.ratings.every((rating) => rating >= minRating));
    return allAboveRating ? `Yes, all ${genre} movies are above ${minRating} ratings` : `No, not all ${genre} movies are above ${minRating} ratings`;
}

console.log(allRatingsAboveForGenre(7, "Action")); // Should print: Yes, all Action movies are above 7 ratings
console.log(allRatingsAboveForGenre(8, "Biography")); // Should print: No, not all Biography movies are above 8 ratings

//Q13: Write a function that returns a string with each movie's title and its ratings joined by commas

function getTitlesAndRatings() {
    return
}
console.log(getTitlesAndRatings()); // Should print: Baahubali: 8, 9, 10 | Arjun Reddy: 9, 8, 9 | Mahanati: 10, 9, 8 | Eega: 7, 8, 9 | Jersey: 9, 9, 8

// Q14: Write a function that returns a single array containing all ratings of all movies


console.log(getAllRatings()); // Should print: [8, 9, 10, 9, 8, 9, 10, 9, 8, 7, 8, 9, 9, 9, 8]


//Q15 : Write a function that returns an array of titles of movies that have ratings above a 
// certain threshold in any rating
const getAllRatings = (movies) => {
    return movies.reduce((acc, movie) => {
        return acc.concat(movie.ratings);
    }, []);
};

console.log(getAllRatings());

// Q16: Write a function that returns an array of movie titles sorted by their average ratings in descending order


console.log(getTitlesSortedByAverageRating()); // Should print: ["Baahubali", "Arjun Reddy", "Jersey", "Mahanati", "Eega"]

// Q17: Write a function that finds the movie with the highest average rating and returns its title


console.log(getMovieWithHighestAverageRating()); // Should print: Baahubali


//Q18Write a function that returns an array of movie titles released after a certain year
function getTitlesAfterYear(year1) {
    const z = movies.filter((x) => x.year > year1)
    return z.map((a) => a.title)
}

console.log(getTitlesAfterYear(2015)); // Should print: ["Arjun Reddy", "Mahanati", "Jersey"]
console.log(getTitlesAfterYear(2018)); // Should print: ["Jersey"]


// Q19: Write a function that finds a movie by its title and returns a formatted string with its director and year
function getMovieInfoByTitle(title) {
    const movie1 = movies.find(m => m.title === title);
    if (!movie1) {
        return "Movie not found";
    }
    else {
        return `${movie1.title} directed by ${movie1.director} was released in ${movie1.year}`;
    }
}

// Q20: Write a function that returns an array of titles of movies that have at least one rating below a certain threshold
function getTitlesWithLowRatings(ratingThreshold) {
    return movies.filter(movie => movie.ratings.some(rating => rating < ratingThreshold))
        .map(movie => movie.title);
}


// Q21: Write a function that calculates the total number of ratings for movies of a specific genre

function getTotalRatingsByGenre(genre1) {
    const aa = movies.filter((x) => x.genre === genre1)
    let length = aa[0].ratings.length
    return length
}
console.log(getTotalRatingsByGenre("Action")); // Should print: 3
console.log(getTotalRatingsByGenre("Drama")); // Should print: 3

// Q22: Write a function that returns an array of movies where the average rating is above a certain value, including the average rating in the result


console.log(getMoviesWithHighAverageRating(8.5)); // Should print: ["Baahubali has an average rating of 9.00", "Arjun Reddy has an average rating of 8.67", "Jersey has an av

// Q23: Write a function that returns an array of movie titles directed by a specific director, sorted by year in ascending order

function getTitlesByDirectorSortedByYear(director1) {
    return movies.sort((a, b) => (a.year - b.year)).filter((a) => a.director === director1).map((d) => d.title)
}

// Q24: Write a function that returns the average rating of movies released in a specific year


console.log(getAverageRatingByYear(2018)); // Should print: 9.00
console.log(getAverageRatingByYear(2015)); // Should print: "No movies released in the specified year"


// Q25: Write a function that returns an array of objects with movie titles and their highest ratings

console.log(getMoviesWithHighestRatings()); // Should print: [{ title: "Baahubali", highestRating: 10 }, { title: "Arjun Reddy", highestRating: 9 }, { title: "Mahanati", highestRating: 10 }, { title: "Eega", highestRating: 9 }, { title: "Jersey", highestRating: 9 }]


//Q26: Write a function that returns the director with the most movies directed

console.log(getDirectorWithMostMovies()); // Should print the director with the most movies

// Q27: Write a function that merges two arrays of movies into one using the spread operator
function mergeMovies(p) {

}
console.log(mergeMovies(movies, moreMovies)); // Should print: array with all 7 movies


// Q28: Write a function that accepts any number of movie objects and returns an array of their titles using the rest operator
function getTitles(...movies) {
    return movies.map((x) => x.title)
}


console.log(getTitles(...movies)); // Should print titles of all movies in the array
console.log(getTitles(movies[0], movies[1])); // Should print: ["Baahubali", "Arjun Reddy"]

const moreMovies = [
    {
        id: 6,
        title: "RRR",
        director: "S. S. Rajamouli",
        year: 2022,
        ratings: [10, 10, 9],
        genre: "Action",
    },
    {
        id: 7,
        title: "Pushpa",
        director: "Sukumar",
        year: 2021,
        ratings: [8, 9, 8],
        genre: "Action",
    },
];

// console.log(mergeMovies(movies, moreMovies)); // Should print the merged array of movies
// console.log(mergeMovies(movies)); // Should print the original array of movies 
movies = [...movies, ...moreMovies]
console.log(movies)

// Q30: Write a function that returns the last N movie titles, using slice and spread operator with a default value for N

console.log(getLastNMovieTitles()); // Should print the last 3 movie titles
console.log(getLastNMovieTitles(2)); // Should print the last 2 movie titles


// Q31: Write a function that accepts multiple movie IDs, fetches the titles, and returns a formatted string using the rest operator, nullish coalescing, and template literals Interesting


console.log(getMovieTitlesByIds(1, 3, 5)); // Should print: Selected Movies: Baahubali, Mahanati, Jersey
console.log(getMovieTitlesByIds(1, 6));   // Should print: Selected Movies: Baahubali, Unknown Title
console.log(getMovieTitlesByIds(5, 1));  // Should print: Selected Movies: Jersey, Baahubali,


// Q32: Write a function that accepts any number of movies and returns a formatted string listing their titles and genres using the rest operator, nullish coalescing, and template literals Interesting


console.log(listMovies(...movies)); // Should print: Baahubali (Action), Arjun Reddy (Drama), Mahanati (Biography), Eega (Fantasy), Jersey (Sports)
console.log(listMovies(movies[0], movies[1], movie[111])); // Should print: Baahubali (Action), Arjun Reddy (Drama), Unknown Title (Unknown Genre)



// Q33: Write a function that calculates the total number of ratings for each director Challenging

const getTotalRatingsForDirectors = () => {
    return movies.reduce((acc, movie) => {
        acc[movie.director] = (acc[movie.director] || 0) + movie.ratings.length;
        return acc;
    }, {});
};

console.log(getTotalRatingsForDirectors()); // Should print: { "S. S. Rajamouli": 6, "Sandeep Reddy Vanga": 3, "Nag Ashwin": 3, "Gowtam Tinnanuri": 3 }



// Q34: Write a function that returns an array of genres sorted by the total number of ratings received by movies in that genre Challenging
console.log(getGenresSortedByTotalRatings()); // Should print genres sorted by total ratings



// Q35: Write a function that returns an array of movie titles directed by directors who have directed more than one movie Challenging
console.log(getTitlesByDirectorsWithMultipleMovies()); // Should print: ["Baahubali", "Eega"]


// Q36: Write a function that calculates the total number of ratings for each genre and returns the genre with the highest total ratings Challenging
console.log(getGenreWithHighestTotalRatings()); // Should print the genre with the highest total ratings


// Q37: Write a function that returns an array of directors who have directed movies with an average rating above a certain value Challenging
console.log(getDirectorsWithHighAverageRatings(8.5)); // Should print directors with high average ratings



// 38.Write a function that updates a movie's genre and ratings by ID, using object destructuring, spread operator, and default values Challenging

function updateMovieDetails(id, { genre: gen, ratings: rat }) {
    let index = movies.findIndex((m) => m.id === id);

    if (index !== -1) {
        movies[index] = {
            ...movies[index],
        };
        movies[index].ratings = rat;
        movies[index].genre = gen;
        return movies;
    }
    else {
        return "Movie not found"
    }
}

console.log(updateMovieDetails(2, { genre: "Romance", ratings: [10, 9, 8] })); // Should print updated Arjun Reddy
console.log(updateMovieDetails(6, { genre: "Thriller" })); // Should print: Movie not found

