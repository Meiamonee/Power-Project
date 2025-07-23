import './Head.css'
import Power from '../assets/Power.png'

function Head() {
    return (
        <header className='cabecalho'>

            <div className='logo'>
                <img src={Power} alt="Logo imagem" className='logo-head' />
                <h3>Power</h3>
            </div>
            
            <div className='header-info'>
                <p><strong>Contato</strong></p>
                <p><strong>Sobre</strong></p>
            </div>

        </header>

    )

}

export default Head;