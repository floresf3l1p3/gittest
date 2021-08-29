

// const frutero = require ('./frutas')
// const frutas = ['platano','manzana','platano','pera'];
// frutero.forEach(item =>
//     {console.count(item)})



// servidor con node
const http = require('http');
const server  =http.createrServer ((req,res) =>{
    res.end('estoy respo9ndiendo tu solicitud')
})
const puerto = 3000;
server.listen(puerto, () =>{
    console.log('escuchando solicitudes')
})