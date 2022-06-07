const MoviesManager = require("../managers/MoviesManager.js")

module.exports = {
    gets: [["Get", "/Movies"], ["GetById", "/Movie/:id"]],
    posts: [["PostMovie", "/Movie"]],
    deletes: [],
    patchs: [],
    
    Get(req, res){
        return res.status(200).send(MoviesManager.GetAll())
    },

    GetById(req, res){
        const {id} = req.params

        res.status(200).send(MoviesManager.GetById(id))
    },

    PostMovie(req, res){
        const body = req.body

        res.status(200).send(MoviesManager.AddMovie(body))
    }
}