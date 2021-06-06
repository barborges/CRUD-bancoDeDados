const Filme = require('../models/filmes')

const criaFilme = async (request, response)=>{

const filme = new Filme({
    nome: request.doby.nome,
    direção: request.body.direção,
    tempo: request.body.tempo,
    ano: request.body.ano
})

}