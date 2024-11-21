import React, { useState } from 'react';
import Navbar from './navbar';
import { FaPlusCircle } from 'react-icons/fa';
import { IoCloseSharp } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosPricetag } from "react-icons/io";
import { FaUser } from 'react-icons/fa';

const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleOpenModal = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    };

    const products = [
        {
            name: 'Camisa CR7',
            description: 'Camisa antiga do Cristiano Ronaldo',
            image: '/src/assets/camisaCR7antiga.png',
            details: 'Camisa do Cristiano Ronaldo Sporting número 28 tamanho M. Está em ótimo estado!',
            seller: 'Jorge da Silva',
            price: 'R$ 300,00',
            location: 'Recife'
        },
        {
            name: 'Xbox Series X',
            description: 'Xbox Series X preto com um controle preto',
            image: '/src/assets/xboxUsado.jpg',
            details: 'Xbox Series X em ótimo estado, comprado há 1 ano e jogado poucas vezes.',
            seller: 'Gabriel Pereira',
            price: 'R$ 2.000,00',
            location: 'Curitiba'
        },
        {
            name: 'Brazuca',
            description: 'Brazuca 2014 nunca utilizada',
            image: '/src/assets/brazucaUsada.jpg',
            details: 'Bola Brazuca de 2014, nunca foi usada, tirada da embalagem há pocuo tempo.',
            seller: 'Anderson dos Santos',
            price: 'R$ 200,00',
            location: 'Curitiba'
        },
        {
            name: 'Air Max 1',
            description: 'Air Max 1 vermelho e branco',
            image: 'src/assets/airMax1.jpg',
            details: 'Air Max 1 usado, porém em ótimo estado e bem cuidado.',
            seller: 'Antônio Cardoso',
            price: 'R$ 150,00',
            location: 'São Paulo'
        },
        {
            name: 'Pc Ben 10',
            description: 'Pc do Ben 10 em ótimo estado',
            image: '/src/assets/pcBen10.png',
            details: 'Computador do Ben 10 utilizado poucas vezes (contém o mouse também).',
            seller: 'Adair Correa',
            price: 'R$ 90,00',
            location: 'Curitiba'
        },
        {
            name: 'Mochila do Real Madrid',
            description: 'Mochila do Real Madrid usada poucas vezes',
            image: '/src/assets/mochilaReal.jpg',
            details: 'Mochila do Real Madrid usada, está limpa e em bom estado.',
            seller: 'João Mattos',
            price: 'R$ 80,00',
            location: 'Balneário Camboriú'
        },
        {
            name: 'Escova do Justin Bieber',
            description: 'Escova de dentes do Justin Bieber que toca música.',
            image: '/src/assets/escovaJustin.jpg',
            details: 'Escova de dentes do Justin Bieber, toca música, ainda na embalagem, nunca usada.',
            seller: 'Helena da Silveira',
            price: 'R$ 50,00',
            location: 'Goiânia'
        },
        {
            name: 'Óculos Juliet',
            description: 'Óculos Juliet usado poucas vezes',
            image: 'src/assets/juliet.jpg',
            details: 'Óculos Juliet usado, porém bem cuidado, em bom estado.',
            seller: 'Guilherme Oliveira',
            price: 'R$ 20,00',
            location: 'Rio de Janeiro'
        },
        {
            name: 'CD do One Direction',
            description: 'CD Mindnight Memories do One Direction',
            image: 'src/assets/cd1D.jpg',
            details: 'CD do One Direction Mindnight Memories ainda lacrado e original.',
            seller: 'Gabriela Souza',
            price: 'R$ 70,00',
            location: 'São Paulo'
        }
    ];

    return (
        <>
            <div className="home">
                <Navbar />
                <div className="novoAnuncio">
                    <button>
                        <FaPlusCircle className="icon-add" />
                        <p>Novo anúncio</p>
                    </button>
                </div>
                <div className="content">
                    <div className="anuncios">
                        {products.map((product, index) => (
                            <div
                                key={index}
                                className="anuncio"
                                onClick={() => handleOpenModal(product)}
                            >
                                <img src={product.image} alt={product.name} />
                                <h1>{product.name}</h1>
                                <p>{product.description}</p>
                            </div>
                        ))}
                    </div>


                    {isModalOpen && (
                        <div className="modal-overlay" onClick={handleCloseModal}>
                            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                                <IoCloseSharp className="sairX" onClick={handleCloseModal} />
                                 <img src={selectedProduct.image} />

                                    <div className="info-container">
                                        <h2>{selectedProduct.name}</h2>
                                        <p className="detailsText">{selectedProduct.details}</p>
                                    <div className="additional-info">

                                    <div className="icon-text">
                                        <FaUser className="userIcon" />
                                        <p className="sellerText">{selectedProduct.seller}</p>
                                    </div>
                                    <div className="icon-text">
                                        <IoIosPricetag className="priceIcon" />
                                        <p className="priceText">{selectedProduct.price}</p>
                                    </div>
                                    <div className="icon-text">
                                        <IoLocationSharp className="locationIcon" />
                                        <p className="locationText">{selectedProduct.location}</p>
                                    </div>
                                    </div>
                                    </div>
                            </div>
                        </div>
                    )}

                    <footer>© 2024 Trade Up - Todos os direitos reservados.</footer>
                </div>
            </div>
        </>
    );
};

export default Home;