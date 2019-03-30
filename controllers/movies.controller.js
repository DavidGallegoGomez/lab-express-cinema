const Movie = require('../models/movie.model');

module.exports.list = (req, res, next) => {
  // TODO: Render movies/list with all database movies
  Movie.find()
    .then( movies => {res.render('movies/lists',{movies})})
    .catch(error => next(error));
}

module.exports.details = (req, res, next) => {
  const id = req.params.id
  Movie.findById(id)
    .then( movie => {res.render('movies/details',{movie})})
    .catch(error => next(error));
}