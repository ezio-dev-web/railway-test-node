const express = require('express')
const app = express()

const port = process.env.PORT || 3000

// engine template
app.set('view engine', 'ejs')
app.set('views',__dirname + '/views')

app.use(express.static(__dirname + "/public"))




app.get('/', (req, res) => {
   res.render("index", {titulo : "titulo dinamico"})
})

app.get('/servicios', (req, res) => {
   res.render("servicios", {tituloService : "titulo dinamico servicios"})
})

app.use((req, res, next) => {
   res.status(404).render("404", {
      titulo: "404",
      descripcion: "Titulo de Servicio"
   })
})


app.listen(port, () => {
   console.log('Escuchando port: ', port);
})

