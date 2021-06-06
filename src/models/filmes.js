const mongoose = require('mongoose')

const filmeSchema = new mongoose.Schema({

    nome: {
        type: String,
        required:true
    },

    direção: {
        type: String,
        required:true 
    },
    
    tempo: {
        type: Number,
        required: true
    },

    ano: {
        type: Date,
        required: true,
        default: new Date
    }

})

module.exports = mongoose.model('filme', filmeSchema)