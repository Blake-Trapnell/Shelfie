module.exports = {
    add: (req,res) => {
        const db = req.app.get('db')
        const {product_name, price, img_url } = req.body
        db.add_data([product_name,price,img_url])
        .then(results=> {
            res.status(200).send(results)
        })
    },
    getAll: async (req,res) => {
        const db = req.app.get('db')
        const all = await db.get_all()
        res.status(200).send(all)
    },
    getById: async (req,res) => {
        const db = req.app.get('db')
        const product = await db.get_by_id([req.params.id])
        res.status(200).send(product)
    },
    updateById: async (req,res) => {
        const db = req.app.get('db')
        const {id} = req.params
        const {product_name, price, img_url} = req.body
        const update = await db.update_by_id([product_name, price, img_url, id])
        res.status(200).send(update)
    },
    deleteById: async (req,res) => {
        const db = req.app.get('db')
        const {id} = req.params
        const eradicate = await db.delete_by_id([id])
        res.status(200).send(eradicate)
    }

}
