function Movie(id, movieName, length) {
    this.Id = id || null
    this.MovieName = movieName || null
    this.LengthInMinutes = length || null
}

module.exports = Movie