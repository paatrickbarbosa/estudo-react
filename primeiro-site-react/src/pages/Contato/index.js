import './cartao.css';
import Zap from '../../img/whatsapp.png'
import Email from '../../img/email.png'
import Insta from '../../img/instagram.png'
import End from '../../img/endereco.png'

function Contato(){
    return(
        <div className="container-cartao">
            <div className="item-cartao">
                <div className='card-cartao'>
                    <div className='imagem-div'>
                        <img src={Email} alt="Email" id="rino"  className="imagem-cartao"/>
                    </div>
                    <div className='txt-div'>
                        <a href='mailto:teste@teste.com'>
                            <h4>teste@teste.com</h4>
                        </a>
                    </div>
                    
                </div>
                <div className='card-cartao'>
                    <div className='imagem-div'>
                        <img src={Zap} alt="Whatsapp" id="zap"  className="imagem-cartao"/>
                    </div>
                    <div className='txt-div'>
                        <a  href='https://wa.me/551988888888' target="_blank" rel="noreferrer" >
                            <h4>+55 (19) 8888-8888</h4>
                        </a>
                    </div>
                    
                </div>

                <div className='card-cartao'>
                    <div className='imagem-div'>
                        <img src={Insta} alt="Instagram" id="insta"  className="imagem-cartao"/>
                    </div>
                    <div className='txt-div'>
                        <a  href='https://www.instagram.com/accounts/login/' target="_blank" rel="noreferrer" >
                            <h4>@JohnDoe</h4>
                        </a>
                    </div>
                    
                </div>

                <div className='card-cartao'>
                    <div className='imagem-div'>
                        <img src={End} alt="Endereco" id="endereco"  className="imagem-cartao"/>
                    </div>
                    <div className='txt-div'>
                        <a  href='https://www.google.com/maps/search/lugar+nenhum/@-37.4301135,-126.1731066,3z' target="_blank" rel="noreferrer" >
                            <h4>Nowhwere Street, 7010 -Nowhere</h4>
                        </a>
                    </div>
                    
                </div>
            </div>
        </div>
        
    );
}
export default Contato;

