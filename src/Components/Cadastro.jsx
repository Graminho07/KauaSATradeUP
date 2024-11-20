import React, { useState } from 'react';
import '/src/Components/Cadastro.css';

const Cadastro = () => {
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');
    const [telefoneRecuperacao, setTelefoneRecuperacao] = useState('');
    const [email, setEmail] = useState('');
    const [emailRecuperacao, setEmailRecuperacao] = useState('');
    const [dataNasc, setDataNasc] = useState('');
    const [password, setPassword] = useState('');

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const validate = () => {
        let tempErrors = {};
        let isValid = true;

        if (!nome) {
            tempErrors.nome = "Nome é obrigatório.";
            isValid = false;
        }
        if (!cpf) {
            tempErrors.cpf = "CPF é obrigatório.";
            isValid = false;
        }
        if (!telefone) {
            tempErrors.telefone = "Telefone é obrigatório.";
            isValid = false;
        }
        if (!email) {
            tempErrors.email = "E-mail é obrigatório.";
            isValid = false;
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                tempErrors.email = "Formato de e-mail inválido.";
                isValid = false;
            }
        }
        if (!emailRecuperacao) {
            tempErrors.emailRecuperacao = "E-mail de recuperação é obrigatório.";
            isValid = false;
        } else {
            const emailRecuperacaoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRecuperacaoRegex.test(emailRecuperacao)) {
                tempErrors.emailRecuperacao = "Formato de e-mail de recuperação inválido.";
                isValid = false;
            }
        }
        if (password.length < 6) {
            tempErrors.password = "A senha deve ter pelo menos 6 caracteres.";
            isValid = false;
        }

        setErrors(tempErrors);
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            try {
                const response = await fetch('http://localhost:3000/api/Cadastro', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        nome,
                        cpf,
                        telefone,
                        telefoneRecuperacao,
                        email,
                        emailRecuperacao,
                        dataNasc,
                        password,
                    }),
                });

                if (!response.ok) {
                    throw new Error('Erro ao registrar usuário.');
                }

                const data = await response.json();
    
                setSuccessMessage(data.message);
                setErrorMessage('');
                setNome('');
                setCpf('');
                setTelefone('');
                setTelefoneRecuperacao('');
                setEmail('');
                setEmailRecuperacao('');
                setDataNasc('');
                setPassword('');
            } catch (error) {
                console.error('Erro:', error);
                setErrorMessage('Erro de conexão com o servidor.');
                setSuccessMessage('');
            }
        }
    };       

    return (
        <div className="container">
            <img src="/src/assets/logo 2.png" alt="Logo" />
            <h2>Trade Up</h2>
            <form onSubmit={handleSubmit}>
                {successMessage && <p className="success">{successMessage}</p>}
                {errorMessage && <p className="error">{errorMessage}</p>}
                <div className='formulario'>
                    <div className="labels">
                        <label>Nome</label>
                        <input
                            type="text"
                            placeholder='Nome completo'
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                        {errors.nome && <span className="error">{errors.nome}</span>}
                    </div>
                    <div className="labels">
                        <label>CPF</label>
                        <input
                            type="text"
                            placeholder="CPF/CNPJ"
                            value={cpf}
                            onChange={(e) => setCpf(e.target.value)}
                        />
                        {errors.cpf && <span className="error">{errors.cpf}</span>}
                    </div>
                    <div className="grid">
                        <div className="labels">
                            <label>Telefone</label>
                            <input
                                type="tel"
                                placeholder="Telefone"
                                value={telefone}
                                onChange={(e) => setTelefone(e.target.value)}
                            />
                            {errors.telefone && <span className="error">{errors.telefone}</span>}
                        </div>
                        <div className="labels">
                            <label>Telefone de recuperação</label>
                            <input
                                type="tel"
                                placeholder="Telefone de recuperação"
                                value={telefoneRecuperacao}
                                onChange={(e) => setTelefoneRecuperacao(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="grid">
                        <div className="labels">
                            <label>Email</label>
                            <input
                                type="email"
                                placeholder="E-mail"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {errors.email && <span className="error">{errors.email}</span>}
                        </div>
                        <div className="labels">
                            <label>Email de recuperação</label>
                            <input
                                type="email"
                                placeholder="E-mail de recuperação"
                                value={emailRecuperacao}
                                onChange={(e) => setEmailRecuperacao(e.target.value)}
                            />
                            {errors.emailRecuperacao && <span className="error">{errors.emailRecuperacao}</span>}
                        </div>
                    </div>
                    <div className="labels">
                        <label>Data de nascimento</label>
                        <input
                            type="date"
                            value={dataNasc}
                            onChange={(e) => setDataNasc(e.target.value)}
                        />
                    </div>
                    <div className="labels">
                        <label>Senha</label>
                        <input
                            type="password"
                            placeholder="Senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errors.password && <span className="error">{errors.password}</span>}
                    </div>
                </div>
                <button type='submit' className="submit-btn">
                    Cadastrar
                </button>
                <div className="signup-link">
                    <p>Já tem uma conta? <a href="/">Faça Login</a></p>
                </div>
            </form>
        </div>
    );
};

export default Cadastro;