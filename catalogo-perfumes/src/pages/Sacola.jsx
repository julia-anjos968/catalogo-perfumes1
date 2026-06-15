function Sacola({ carrinho }) {
    const total = carrinho.reduce(
        (acc, item) =>
            acc + Number(item.preco.replace('R$', '').replace('.', '').replace(',', '.')),
        0,
    );

    return (
        <div className="sacola-page">
            <h1>🛒 Sua Sacola</h1>

            {carrinho.length === 0 ? (
                <div className="sacola-vazia">Nenhum perfume adicionado.</div>
            ) : (
                <>
                    {carrinho.map((item, index) => (
                        <div key={index} className="item-sacola">
                            <img src={item.imagem} alt={item.nome} />

                            <div>
                                <h3>{item.nome}</h3>

                                <p>{item.marca}</p>

                                <strong>{item.preco}</strong>
                            </div>
                        </div>
                    ))}

                    <h2>
                        Total: R$
                        {total.toFixed(2)}
                    </h2>
                </>
            )}
        </div>
    );
}

export default Sacola;
