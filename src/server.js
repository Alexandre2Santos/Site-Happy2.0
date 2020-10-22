//importando dependencias
const express = require('express');
//iniciando o express
const server = express()
//criar uma rota
server.get('/', () => {
    console.log('oi')
})
//ligar servidor
server.listen(5500)
