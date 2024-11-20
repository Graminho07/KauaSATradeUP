const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    cpf: { type: String, required: true, unique: true },
    telefone: { type: String, required: true },
    telefoneRecupercao: { type: String },
    email: { type: String, required: true, unique: true },
    emailRecuperacao: { type: String },
    dataNasc: { type: Date, required: true },
    password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

module.exports = User;