import { Link, useParams } from 'react-router-dom';
import perfumes from '../data/perfumes';

function DetalhesPerfume({ adicionarCarrinho }) {
    const { id } = useParams();

    const perfume = perfumes.find((item) => item.id === Number(id));

    if (!perfume) {
        return (
            <div className="detalhes-page">
                <h1>Perfume não encontrado.</h1>
            </div>
        );
    }

    return (
        <div className="detalhes-page">
            <div className="detalhes-container">
                <div className="detalhes-imagem">
                    <img src={perfume.imagem} alt={perfume.nome} />
                </div>

                <div className="detalhes-info">
                    <Link to="/" className="voltar">
                        ← Voltar para coleção
                    </Link>

                    <span className="categoria">{perfume.categoria}</span>

                    <h1>{perfume.nome}</h1>

                    <h2>{perfume.marca}</h2>

                    <p className="descricao">{perfume.descricao}</p>

                    <div className="box-info">
                        <h4>Notas Olfativas</h4>

                        <p>{perfume.notas}</p>
                    </div>

                    <div className="preco">{perfume.preco}</div>

                    <button
                        className="comprar"
                        onClick={() => {
                            if (adicionarCarrinho) {
                                adicionarCarrinho(perfume);
                            }
                        }}>
                        Adicionar à Sacola
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DetalhesPerfume;
