import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Home from './pages/Home';
import DetalhesPerfume from './pages/DetalhesPerfume';
import Sacola from './pages/Sacola';

function App() {
    const [carrinho, setCarrinho] = useState([]);

    const adicionarCarrinho = (perfume) => {
        setCarrinho([...carrinho, perfume]);
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home carrinho={carrinho} />} />

                <Route
                    path="/perfume/:id"
                    element={
                        <DetalhesPerfume
                            adicionarCarrinho={adicionarCarrinho}
                            carrinho={carrinho}
                        />
                    }
                />

                <Route path="/sacola" element={<Sacola carrinho={carrinho} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
