const Movie = require('../models/movie.model');
const mongoose = require('mongoose');
const createError = require('http-errors');

module.exports.list = (req, res, next) => {
  // TODO: Render movies/list with all database movies
  const criteria = {};
  if (req.query.search) {
    const exp =  new RegExp(req.query.search, 'i');
    // Usando $in se puede hacer búsquedas por más de 2 campos!!! (SERÍA LA MEJORA FINAL)
    criteria.$or = [{title: exp}, {description: exp} ]
  }
  Movie.find(criteria)
    .then( movies => {res.render('movies/lists',{
      movies,
      search: req.query.search
    })})
    .catch(error => next(error));
}

module.exports.details = (req, res, next) => {
  const id = req.params.id
  Movie.findById(id)
    .then( movie => {res.render('movies/details',{movie})})
    .catch(error => next(error));
}

