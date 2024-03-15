const http = require('http')

const server = http.createServer((req,res)=>{
res.writeHead(200,{'content-type':'text/explain'})
res.end('it is working')
})

server.listen(3000,()=>{
    console.log('running')
})