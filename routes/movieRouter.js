const express = require("express")
const movieRouter = express.Router()
const Movie = require("../models/movies")


movieRouter.get('/', async (req, res, next) => {
     try {
         const foundMovies = await Movie.find()
         return res.status(200).send(foundMovies)
     } catch (error) {
         res.status(500)
         return next(error)
     }
})

movieRouter.get('/:movieId', async (req, res, next) => {
     try {
         const movieId = req.params.movieId
         const foundMovieId = await Movie.findById(movieId)
         console.log(movieId)
         return res.status(200).send(foundMovieId)
        } catch (error) {
         res.status(500)
         return next(error)
     }
})

movieRouter.get('/genre', async (req, res, next) => {
     try {
         const foundGenre = await Movie.find({genre: req.query.genre})
         return res.status(200).send(foundGenre)
     } catch (error) {
         res.status(500)
         return next(error)
     }
})

movieRouter.post('/', async (req, res, next) => {
     try {
         const newMovie = new Movie(req.body)
         const savedMovie = await newMovie.save()
         return res.status(201).send(savedMovie)
     } catch (error) {
         res.status(500)
         return next(error)
     }
})

movieRouter.delete('/:movieId', async (req, res, next) => {
     try {
         const movieId = req.params.movieId
         const deletedMovie = await Movie.findByIdAndDelete(movieId)
         return res.status(200).send(`You have seccessfully deleted ${deletedMovie.name} iforamtion`)
        } catch (error) {
          res.status(500)
          return next(error)
     }
})

movieRouter.put('/:movieId', async (req, res, next) => {
     try {
         const movieId = req.params.movieId
         const updatedMovie = await Movie.findByIdAndUpdate(
            movieId,
            req.body,
            {new: true}
         )
         return res.status(201).send(updatedMovie)
     } catch (error) {
         res.status(500)
         return next(error)
     }
})
module.exports = movieRouter