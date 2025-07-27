import '../Faixa/Faixa.css'
import logitech from '../../assets/logi.webp'
import corsair from '../../assets/corsair.webp'
import hyperx from '../../assets/hyperx.webp'

function Faixa() {
    const imagens = [
        logitech, corsair, hyperx,
        logitech, logitech, logitech,
        logitech, logitech, logitech,
    ];

    const imagensEmLoop = [...imagens, ...imagens];

    return (
        <div className="container-faixa">
            <div className="imagem-faixas">
                {imagensEmLoop.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`marca-${index}`}
                        className={src === hyperx ? 'hyperx-margin' : ''}
                    />
                ))}
            </div>
        </div>
    );
}

export default Faixa;
