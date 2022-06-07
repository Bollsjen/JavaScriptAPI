const ItemsManager = require("../managers/ItemsManager.js")

module.exports = {
    gets: [["Get", "/Items"], ["GetById", "/Item/:id"]],
    posts: [["PostItem", "/Item"]],
    deletes: [],
    patchs: [],
    Get(req, res){
        return res.status(200).send(ItemsManager.GetAll())
    },

    GetById(req, res){
        const {id} = req.params

        res.send(ItemsManager.GetById(id))
    },

    PostItem(req, res){
        const body = req.body

        res.status(200).send(ItemsManager.AddMovie(body))
    }
}