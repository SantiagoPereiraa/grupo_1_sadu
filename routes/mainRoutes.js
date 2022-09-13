const express = require('express');
const router = express.Router();

const maincontroller = require('../controllers/mainControllers');

router.get('/', maincontroller.home);

//USUARIOS / REGISTRO 

router.get('/login', maincontroller.login);

router.get('/register', maincontroller.register);

//CARRITO DE COMPRAS 

router.get('/compras', maincontroller.compras);

//footer

router.get('/footer',maincontroller.footer);

//Listado de productos 

router.get('/Productos/listado', maincontroller.listado)



module.exports= router;