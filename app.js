require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 3000


// body-parse | form-json
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



// conexion-DB
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.5jpurcg.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`

mongoose.connect(uri,
   { 
      useNewUrlParser: true,
      useUnifiedTopology: true
   })
   .then(() => console.log('DB conectado...!'))
   .catch(e => console.log(e))



// engine template
app.set('view engine', 'ejs')
app.set('views',__dirname + '/views')



// direction public
app.use(express.static(__dirname + "/public"))



// rutas-web
app.use('/', require('./router/RutasWeb'))
app.use('/mascotas', require('./router/Mascotas'))



// page-not-found
app.use((req, res, next) => {
   res.status(404).render("404", {
      titulo: "404",
      descripcion: "Titulo de Servicio"
   })
})



// listen-server
app.listen(port, () => {
   console.log('Escuchando port: ', port);
})

