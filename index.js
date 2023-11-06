// const express = require("express");
// const app = express();

const app = require("./app");

const PORT = 6001;

app.listen(PORT, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log("Server is listening on ${PORT}");
  }
});
// const port = 6001;

// const welcome = (req, res) => {
//   res.send("Welcome to Express");
// };

// app.get("/", welcome);

// const welcomeName = (req, res) => {
//   res.send(`Welcome ${req.params.name}`);
// };

// app.get("/users/:name", welcomeName);

// app
//   .listen(port, () => {
//     console.info(`Server is listening on port ${port}`);
//   })
//   .on("error", (err) => {
//     console.error("Error:", err.message);
//   });

// const getMovies = (req, res) => {
//   res.status(200).json(movies);
// };

// const moviesList = (req, res) => {
//   res.send("Welcome to my favorite movie list");
// };

// app.get("/", moviesList);

// app.get("/api/movies", getMovies);

// app.get("/api/movies/:id", (req, res) => {
//   const movieId = parseInt(req.params.id);
//   const movie = movies.find((m) => m.id === movieId);

//   if (movie) {
//     res.status(200).json(movie);
//   } else {
//     res.status(404).json({ message: "Not Found" });
//   }
// });

// app.listen(port, (err) => {
//   if (err) {
//     console.error("Something bad happened");
//   } else {
//     console.log(`server is listening on ${port}`);
//   }
// });
