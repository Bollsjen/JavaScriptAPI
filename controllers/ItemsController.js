module.exports = {
    gets: [["Get", "/Items"], ["GetById", "/Item/:id"]],
    posts: [["PostItem", "/Item"]],
    deletes: [],
    patchs: [],
    Get(req, res){
        return res.status(200).send({message: "Fiskesnask"})
    },

    GetById(req, res){
        const {id} = req.params

        res.send({
            item: `Item with id of ${id}`
        })
    },

    PostItem(req, res){
        const {id} = req.params
        const body = req.body

        console.log(body)

        res.send(body)
    }
}