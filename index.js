const express = require('express');
const server = express();

server.get('/',(req,res)=>{
    res.send('Hello World, Good Morning');
})

server.listen(3000,()=>{
    console.log('Port listening to 3000');
})