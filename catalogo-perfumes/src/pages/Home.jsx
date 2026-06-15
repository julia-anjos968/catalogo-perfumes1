import { useState } from 'react';
import NavBar from '../components/NavBar';
import PerfumeCard from '../components/PerfumeCard';
import perfumes from '../data/perfumes';

function Home() {
    const [busca, setBusca] = useState('');

    const perfumesFiltrados = perfumes.filter((perfume) =>
        perfume.nome.toLowerCase().includes(busca.toLowerCase()),
    );

    return (
        <>
            <NavBar />

            <section className="hero">
                <div className="hero-text">
                    <span className="tag">Luxury Fragrances</span>

                    <h1>
                        The Essence
                        <br />
                        of Luxury
                    </h1>

                    <p>
                        Descubra fragrâncias exclusivas, sofisticadas e marcantes para cada momento
                        da sua vida.
                    </p>

                    <button>Explorar Coleção</button>
                </div>

                <div className="hero-image">
                    <img src={perfumes[0].imagem} alt="Perfume destaque" />
                </div>
            </section>

            <section className="busca-section">
                <input
                    type="text"
                    placeholder="Pesquisar perfume..."
                    value={busca}
                    onChange={(e) => setBusca(e.target.value)}
                />
            </section>

            <section id="colecao" className="colecao">
                <div className="section-title">
                    <h2>The Floral Collection</h2>
                    <p>Perfumes selecionados para você</p>
                </div>

                <div className="cards-grid">
                    {perfumesFiltrados.map((perfume) => (
                        <PerfumeCard key={perfume.id} perfume={perfume} />
                    ))}
                </div>
            </section>

            <section id="marcas" className="marcas">
                <h2>Marcas Parceiras</h2>

                <div className="brands">
                    <span>Dior</span>
                    <span>Chanel</span>
                    <span>Lancôme</span>
                    <span>Carolina Herrera</span>
                </div>
            </section>

            <footer className="footer">
                <h3>ESSENCE</h3>

                <p>© 2026 Todos os direitos reservados</p>
            </footer>
        </>
    );
}

export default Home;
