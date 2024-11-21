import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import './Login.css';
import EsqSenha from './EsqueceuSenha';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isVisible, setVisible] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleModal = () => setVisible(!isVisible);

    const handleLogin = async () => {
        setError('');
        setLoading(true);

        try {
            const response = await fetch('http://localhost:3000/api', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            setLoading(false);

            if (response.ok) {
                localStorage.setItem('user', JSON.stringify(data.user));
                window.location.href = '/home';
            } else {
                setError(data.message || 'Erro ao realizar login.');
            }
        } catch (error) {
            setLoading(false);
            setError('Erro no servidor. Tente novamente mais tarde.');
        }
    };

    return (
        <div className="container">
            <form className="form-login" onSubmit={(e) => e.preventDefault()}>
                <img src="/src/assets/logo 2.png" alt="Logo" />
                <h2>Trade Up</h2>
                <div className="input1">
                    <FaUser className="icon" />
                    <input
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="input2">
                    <FaLock className="icon" />
                    <input
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <p className="error-message">{error}</p>}
                <div className="recall-forget">
                    <label className="custom-checkbox">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                        Manter me conectado
                    </label>
                    <a href="#" onClick={handleModal}>Esqueceu a senha?</a>
                </div>
                <button type="button" onClick={handleLogin} disabled={loading}>
                    {loading ? 'Carregando...' : 'Entrar'}
                </button>
                <div className="signup-link">
                    <p>Não tem uma conta? <a href="/Cadastro">Cadastre-se</a></p>
                </div>
            </form>
            {isVisible && <EsqSenha sair={handleModal} />}
        </div>
    );
};

export default Login;