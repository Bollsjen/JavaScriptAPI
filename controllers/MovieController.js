const MoviesManager = require("../managers/MoviesManager.js")


module.exports = {
    gets: [["Get", "/Movie"], ["GetById", "/Movie/:id"]],
    posts: [["PostMovie", "/Movie"]],
    deletes: [["DeleteMovie","/Movie/:id"]],
    patchs: [["PatchMovie","/Movie/:id"]],

    Get(req, res){
        let movies = MoviesManager.GetAll()
        if(movies == null || movies == undefined ||movies.length <= 0){
            res.status(404).send({message:"No movies was found"})
            return
        }
        res.status(200).send(movies)
    },

    GetById(req, res){
        const {id} = req.params
        let movie = MoviesManager(MoviesManager.GetById(id))
        if(movie == null){
            res.status(404)
            return
        }
        res.status(200).send(movie)
    },

    PostMovie(req, res){
        const body = req.body
        let movie = MoviesManager.AddMovie(body)
        if(movie == null){
            res.status(404)
            return
        }
        res.status(200).send(movie)
    },

    DeleteMovie(req, res){
        const {id} = req.params
        let movie = MoviesManager.DeleteMovie(id)
        if(movie == null){
            res.status(404)
            return
        }
        res.status(200).send(movie)
    },

    PatchMovie(req, res){
        const {id} = req.params
        const body = req.body
        let movie = MoviesManager.UpdateMovie(id, body)
        if(movie == null){
            res.status(404)
            return
        }

        res.status(200).send(movie)
    }
}