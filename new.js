const express = require('express')
const mongoose = require('mongoose')

const app = express()

//importer mon modele pour lutiliser dans post du client
const car = require('./models/vehiculemodel')

app.use(express.json())
//mes routes
app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/html')
    res.send("node api hi")
})


app.listen(3000,()=>{
    console.log('its running hier')
})

app.post('/car',async(req,res)=>{
//   // when he tried insomnia..
//     console.log(req.body)
//     res.send(req.body)

// oder wir haben das 
try {// on rajoute await psk on travaille
    //avec database 
    const mycar = await car.create(req.body)//prob
    res.status(200).json(mycar)
}catch(error){
    console.log(error.message)
    // res.status etc...
    res.status(500).json({message: error.message})
}

})

mongoose.set("strictQuery",false)
mongoose.connect('mongodb://localhost:27017/ma_base')
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));
