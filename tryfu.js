const express = require('express')

const app = express()

app.get('/', (req,res)=>{
res.send('working  hard hhhh')
}
)

app.post('/', (req,res)=>{
    res.send(' post hard')
    })

app.listen(3000,()=>{
    console.log('omg  http://localhost:3000' )
})
