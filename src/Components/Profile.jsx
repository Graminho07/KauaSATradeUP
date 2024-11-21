import React, { useEffect, useState } from 'react';
import Navbar from "./navbar";
import { PiUserCircleGearFill } from "react-icons/pi";

const Profile = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const userData = localStorage.getItem('user');
        if (userData) {
            setUser(JSON.parse(userData));
        } else {
            console.error('Nenhum dado de usuário encontrado');
        }
        setLoading(false);
    }, []);

    if (loading) {
        return <p>Carregando...</p>;
    }

    return (
        <>
        <Navbar />
        <div className="container">
            <PiUserCircleGearFill className='profileIcon'/>
            <h2>Meus dados</h2>
            {user ? (
                <div className="user-data">
                    <div className="data-field">
                        <span>Nome</span>
                        <input type="text" value={user?.name || ''} readOnly />
                    </div>
                    <div className="data-field">
                        <span>Email</span>
                        <input type="text" value={user?.email || ''} readOnly />
                    </div>
                    <div className="data-field">
                        <span>Data de nascimento</span>
                        <input
                            type="date"
                            value={user?.dataNasc ? new Date(user.dataNasc).toISOString().split('T')[0] : ''}
                            readOnly
                        />
                    </div>
                    <div className="data-field">
                        <span>CPF</span>
                        <input type="text" value={user?.cpf || ''} readOnly />
                    </div>
                </div>
            ) : (
                <p>Nenhum usuário logado.</p>
            )}
        </div>
        </>
    );
};

export default Profile;