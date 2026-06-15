import { Link } from 'react-router-dom';

function PerfumeCard({ perfume }) {
    return (
        <Link to={`/perfume/${perfume.id}`} className="card">
            <img src={perfume.imagem} alt={perfume.nome} />

            <div className="card-info">
                <h3>{perfume.nome}</h3>

                <p>{perfume.marca}</p>

                <span>{perfume.preco}</span>

                <button>Ver detalhes</button>
            </div>
        </Link>
    );
}

export default PerfumeCard;
