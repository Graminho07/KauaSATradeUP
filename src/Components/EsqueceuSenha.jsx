const EsqSenha = ({sair}) => {
    return (
        <>
        <div className="modal">
                <img src="/src/assets/logo 2.png" alt="LoginSA/src/assets/logo 2.png" type="image/png" />
            <h3>Esqueci minha senha</h3>
            <form action="">
                <span>E-mail</span>
                <input type="text" />
                <span>Nova senha</span>
                <input type="text" />
                <button onClick={sair}>Salvar</button>
            </form>
        </div>
        </>
    )
}

export default EsqSenha;