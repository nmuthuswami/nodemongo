const express = require('express');
const server = express();

server.get('/',(req,res)=>{
    res.send('Hello World, Good Morning 123');
})

server.listen(3000,()=>{
    console.log('Port listening to 3000');
})
