const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const server = express();

server.use(express.json());

const equipamentos = ['celular', 'notbook', 'fone'];

//retornar todos equipamentos da lista
server.get('/equipamentos', (req, res) => {
    return res.json(equipamentos)
})

//retornar um equipamento
server.get('/equipamentos/:index', (req, res) => {
    const { index } = req.params

    return res.json(equipamentos[index])
})


//criar um novo equipamento
server.post('/equipamentos', (req, res) => {
    const { name } = req.body;
    equipamentos.push(name);

    return res.json(cursos);
});


//atualizar cursor
server.put('/equipamentos/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    equipamentos[index] = name;

    return res.json(equipamentos);
});

//deletar algum equipamento
server.delete('/equipamentos/:index', (req, res) => {
    const { index } = req.params;

    equipamentos.splice(index, 1);
    return res.json({ message: "o curso foi deletado com sucesso" });
});

//porta onde está rodando
server.listen(3000);
