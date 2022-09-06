import Error from '../../pages/img/error.gif'
import './erro.css';
function Erro(){
    return(
        <div className="container-erro">
            <h2 className='titulo-erro'>Página Não Encontrada - 404</h2>
            <div className="item-erro">
                <img src={Error} alt="Error" className='img-erro' />
            </div>
        </div>
    );
}
export default Erro;