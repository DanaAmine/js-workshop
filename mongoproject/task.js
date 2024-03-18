// importing
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');

const server = express()

//cnnx to mongo
mongoose.connect('mongodb://127.0.0.1:27017/ma_base').then(() => {
  console.log('ur connected to mongo db')
}).catch((erreur) => {
  console.error('il y a une erreur '.erreur)
})

//le schema de ma recette est
const recipeSchema = new mongoose.Schema({
  title: String,
  ingredients: Number,
  likes: Number
})

// definir le modele que je vais travailler vc
// pour les mtd

// const Recette = new ('Recette', recipeSchema)
const Recette = mongoose.model('Recette', recipeSchema)

server.use(bodyParser.json());

server.post('/recipe', async (req, res) => {
  try {
    const recipe = new Recette(req.body)
    await recipe.save()
    res.status(200).json(recipe)

  } catch (erreur) {
    res.status(400).jsom({ error: erreur.message })

  }


})


server.listen(8000)

