import express from "express";
import { router as heroesRouter } from "./routes/heroesRouter.js";
const PORT = 3000;

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("./src/public")) // si bien ponemos la ruta relativa, conviene usar la ruta absoluta

app.use('/api/heroe', heroesRouter)

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.status(200).send("ok");
})

const server = app.listen(PORT, () => {
  console.log(`server escuchando en el puerto ${PORT}`)
})

