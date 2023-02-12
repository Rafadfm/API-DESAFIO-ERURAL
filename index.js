const express   = require('express');
const server    = express();

server.get('/usuario',  (req,res) => {
    return res.json({usuario: 'Rafael'})
}); 

server.post(sale)

server.listen(3000, () => {
    console.log('Servidor está funcionando...')
})