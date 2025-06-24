import HeroesManager from '../dao/heroesManager.js';

import express from "express"; //importamos express
export const router = express.Router(); //nos traemos router de express y lo inicializamos en una variable llamda router

//como en este router vamos a manejar mascotas vamos a tener que crear la variable
let heroeManager = new HeroesManager ()
router.get('/', (req, res) => {
  res.send('Ruta heroes funcionando');
});