// importing
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');

const server = express()

//|||||||||||||||||||||||||||||||| TTTTTTHAAAAAAAAAAANKKKKKKKKKKKK YOUUUUUUUU FORRR EVERYY THIIIIIINNGGG ||||||||||||||||||||||||||||||||||||

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

const Recette = mongoose.model('Recette', recipeSchema)

server.use(bodyParser.json());

server.post('/recipe', async (req, res) =>{
  try {
    const recipe = new Recette(req.body)   
    await recipe.save()
    res.status(200).json(recipe)

  } catch (erreur) {
    res.status(400).jsom({ error: erreur.message })

  }
})
// get tt les donnees
server.get('/recipe',async(req,res)=>{
    try{
    const LaRecette =await Recette.find()
    res.json(LaRecette)
    }catch(erreur){
        res.status(500).json({error :erreur.message})
    }   
})
// pour stocker une info ou bien maj
server.put('/recipe/:id',async(req,res)=>{
    try{
        const {id} = req.params
        const MyRecipe = await Recette.findByIdAndUpdate(id, req.body,{ new:true }) // new true pour mettre ajour le nv doc
        res.json(MyRecipe)
    }catch(e){
        res.status(404).json({error:'non trouve'})
    }
  
})

// supp by id
server.delete('/recipe/:id',async (req,res)=>{
    try{
        const {id }= req.params
        await Recette.findByIdAndDelete(id)
        res.sendStatus(204)
    }catch(e){
       res.status(404).json({error: 'recette non trouvee'})
    }
})


const PORT = process.env.PORT ;  // npm i dotenv syitha hh
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

  



