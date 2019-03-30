require('../conf/db.conf')

const mongoose = require('mongoose')
const Movie = require('../models/movie.model')
const movies = require('../data/movies.json')

Movie.create(movies)
  .then((movies) => console.info(movies))
  .catch( error => console.error(error))
