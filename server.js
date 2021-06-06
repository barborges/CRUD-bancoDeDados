const express = require('express') 
const app = express() 


const db = require('./src/data/database')
db.connect()


app.use(express.json())

/* //usar as rotas
const livrosrouter = require('./src/routes/livros.routes')
app.use('/livros', livrosrouter) */

app.listen(3333, ()=> console.log('servidor rodando! tudo certo por aqui ;)'))       