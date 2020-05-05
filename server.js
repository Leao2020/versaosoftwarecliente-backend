const express = require('express');

const server = express();

server.use(express.json());

 const softwares = [
   { cliente: 'Anastacio - ME', app: 'FlexControl', versao: 1 },
   { cliente: 'Distribuidor Total', app: 'MasterControl', versao: 3}
]

server.get('/software', function(request, response) {
   response.json(softwares);
})

server.post('/software', function(request, response) {

  // FICA COMENTADO MESMO const cliente = request.body.cliente;   
  // FICA COMENTADO MESMO const app = request.body.app;
  // FICA COMENTADO MESMO const versao = request.body.versao;

  const {cliente, app, versao} = request.body;

  softwares.push({cliente, app, versao});
  response.status(204).send();
})

server.put('/software/:id', function(request, response) {
  const id = request.params.id;
  const {cliente, app, versao} = request.body;

  for(let i = 0; i < softwares.length; i++) {
      if(softwares[i].cliente == id) {
          softwares[i].cliente = cliente;
          softwares[i].app = app;
          softwares[i].versao = versao;
          break;
      }
  }

  return response.status(204).send();
})

server.delete('/software/:id', function(request, response) {

    const id = request.params.id;

   for(let i = 0; i < softwares.length; i++) {
       if(softwares[i].cliente == id) {
           softwares.splice(i, 1);
           break;
       }
   }  
     
    return response.status(204).send();
})

server.listen(process.env.PORT || 3000); 