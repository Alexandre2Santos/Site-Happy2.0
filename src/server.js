//importando dependencia
const express = require('express');
const { get } = require('http');
const path = require('path');
const { orphanages } = require('./pages.js');
const pages = require('./pages.js')


//iniciando o express
const server = express()
server
// utilizar body do req
.use(express.urlencoded({ extended: true }))
//utilizando arquivos estáticos
.use(express.static('public'))

//configurar template engine
.set('views', path.join(__dirname,"views"))
.set('view engine', 'hbs')
//rotas da aplicação
.get('/', pages.index )
.get('/orphanage', pages.orphanage )
.get('/orphanages', pages.orphanages )
.get('/create-orphanages', pages.createOrphanage )
.post('/save-orphanage', pages.saveOrphanage)



//ligar servidor 
server.listen(5500)
