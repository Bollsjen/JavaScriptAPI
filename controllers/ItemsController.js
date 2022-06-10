const ItemsManager = require("../managers/ItemsManager.js")

module.exports = {
    gets: [["Get", "/Items"], ["GetById", "/Item/:id"]],
    posts: [["PostItem", "/Item"]],
    deletes: [],
    patchs: [],
    Get(req, res){
        let items = ItemsManager.GetAll()
        if(items.length <= 0 || items == null){
            res.status(404)
            return
        }
        res.status(200).send(items)
    },

    GetById(req, res){
        const {id} = req.params

        let item = ItemsManager.GetById(id)
        if(item == null){
            res.status(404)
            return
        }

        res.send(item)
    },

    PostItem(req, res){
        const body = req.body
        let item = ItemsManager.AddMovie(body)
        if(item == null){
            res.status(404)
            return
        }
        res.status(200).send(item)
    }
}