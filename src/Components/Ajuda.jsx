import React from 'react';
import Navbar from './navbar';

const Ajuda = () => {
    return (
        <>
            <Navbar />
                <h1 className="titlePerguntas">Perguntas Frequentes</h1>
                <details>
                    <summary>Como o Trade Up funciona?</summary>
                    <p>O Trade Up é uma plataforma que facilita a troca de produtos entre os usuários, garantindo uma experiência prática e segura.</p>
                </details>
                <details>
                    <summary>Como faço para trocar um produto?</summary>
                    <p>Você pode anunciar seu produto na plataforma e escolher outro de valor equivalente para realizar a troca diretamente com o anunciante.</p>
                </details>
                <details>
                    <summary>Como faço para entrar em contato com os anunciantes?</summary>
                    <p>Nosso sistema de chat, localizado no canto inferior direito da página inicial, permite que você converse diretamente com outros usuários.</p>
                </details>

                <h2 className="contactTitle">Dúvidas? Contate-nos!</h2>
                <form className="contactForm">
                    <label htmlFor="name">Nome</label>
                    <input type="text" id="name" placeholder="Digite seu nome" />

                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" placeholder="Digite seu e-mail" />

                    <label htmlFor="message">Dúvida</label>
                    <textarea id="message" rows="4" placeholder="Digite sua dúvida"></textarea>

                    <button type="submit">Enviar</button>
                </form>
        </>
    );
};

export default Ajuda;