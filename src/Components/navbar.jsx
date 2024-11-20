import { FaHome, FaUser, FaArrowCircleLeft } from 'react-icons/fa';

const Navbar = () => {
    return (
        <>
            <div className="nav">
                <div className="row">

                    <img src="/src/assets/logo 2.png" alt="LoginSA/src/assets/logo 2.png" type="image/png" />

                    <a href="/home">
                        <FaHome className="icon" />
                        <p>Home</p>
                    </a>
                </div>
                <div className="row">
                    <a href="/">
                        <FaArrowCircleLeft />
                        <p>Sair</p>
                    </a>
                    <a href="/profile">
                        <FaUser />
                        <p>Perfil</p>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Navbar;