import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">ESSENCE</div>

            <div className="menu">
                <Link to="/">Home</Link>
                <a href="#colecao">Coleção</a>
                <a href="#marcas">Marcas</a>
                <a href="#contato">Contato</a>
            </div>

            <Link to="/sacola" className="cart">
                🛒
            </Link>
        </nav>
    );
}

export default Navbar;
