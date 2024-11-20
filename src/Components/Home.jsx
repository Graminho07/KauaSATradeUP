import Navbar from "./navbar";
import { FaPlusCircle } from 'react-icons/fa';


const Home = () => {
    return (
        <>
            <div className="home">
            <Navbar />
            <div className="content">   
                <div className="">
                <FaPlusCircle className="icon-add" />

                <p>novo anúncio</p>
                </div>

            </div>
            </div>
        </>
    )

}

export default Home;