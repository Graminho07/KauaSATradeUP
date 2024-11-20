const User = require('../models/User.cjs');

const registerUser = async (req, res) => {
    const { nome, cpf, telefone, telefoneRecupercao, email, emailRecuperacao, dataNasc, password } = req.body;

    try {
        const userRegistered = await User.findOne({ email });
        if (userRegistered) {
            return res.status(400).json({ message: "Usuário já registrado." });
        }
    
        const newUser = new User({
            nome,
            cpf,
            telefone,
            telefoneRecupercao,
            email,
            emailRecuperacao,
            dataNasc,
            password
        });
    
        await newUser.save();
        res.status(201).json({ message: "Usuário registrado com sucesso!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erro ao registrar usuário.", error });
    }
};

module.exports = { registerUser };