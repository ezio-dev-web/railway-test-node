const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
   res.render("mascotas", {
      arrayMascotas: [
         {
            id: '01',
            nombre: 'rex',
            descripcion: 'rex descripcion'
         },
         {
            id: '02',
            nombre: 'wily',
            descripcion: 'wily descripcion'
         }
      ]
   })
})













module.exports = router