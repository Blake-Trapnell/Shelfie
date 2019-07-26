require('dotenv').config()
const express = require('express')
const app = express()
const massive = require('massive')
const ctrl = require('./controller')
const {PORT, CONNECTION_STRING} = process.env


app.use(express.json())

app.get('/api/products', ctrl.getAll)
app.get('/api/products/:id', ctrl.getById)
app.put('/api/products/:id', ctrl.updateById)
app.delete('/api/products/:id',ctrl.deleteById)
app.post('/api/products', ctrl.add)


massive(CONNECTION_STRING)
.then(db=> {
    app.set('db',db)
    app.listen(PORT, ()=> console.log(`living it up on port ${PORT}`))
}
).catch(err=> {alert(err)})