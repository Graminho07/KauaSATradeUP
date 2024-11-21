const User = require('../models/User.cjs');

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "E-mail ou senha incorretos." });
        }

        if (password !== user.password) {
            return res.status(400).json({ message: "E-mail ou senha incorretos." });
        }

        return res.status(200).json({
            message: "Login bem-sucedido!",
            user: {
                name: user.nome,
                email: user.email,
                dataNasc: user.dataNasc,
                cpf: user.cpf
            }
        });
    } catch (error) {
        console.error("Erro ao realizar o login:", error);
        return res.status(500).json({ message: "Erro no servidor.", error });
    }
};

module.exports = { loginUser };