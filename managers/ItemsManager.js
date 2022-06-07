module.exports = {
    nextId: 1,
    Movies: new Array(),
    GetAll(){
        return this.Movies
    },

    GetById(id){
        let movie = null
        for(let i in this.Movies){
            if(this.Movies[i].Id == id){
                movie = this.Movies[i]
            }
        }

        return movie
    },

    AddMovie(movie){
        movie.Id = this.nextId++
        this.Movies.push(movie)
        return movie
    },
}