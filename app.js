const express = require('express')
const app = express()

const port = process.env.PORT || 3000

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

