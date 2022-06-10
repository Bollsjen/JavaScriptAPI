const Movie = require("../models/Movie.js")
const Database = require("../database/Database.js")

module.exports = {
    nextId: 3,
    Movies: new Array(new Movie(1,"Fiskens hævn", 265), new Movie(2,"Fiskens magt", 176)),
    GetAll(){
        return Database.select("SELECT * FROM movies")
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
        let result = Database.insert("movies", movie)
        console.log(result)
        return movie
    },

    DeleteMovie(id){
        let movie = null
        for(let i in this.Movies){
            if(this.Movies[i].Id == id){
                movie = this.Movies[i]
                this.Movies.splice(i,1)
            }
        }
        return movie
    },

    UpdateMovie(id, movie){
        for(let i in this.Movies){
            if(this.Movies[i].Id == id){
                this.Movies[i] = movie
                movie.Id = this.Movies[i].Id
            }
        }
    }
}