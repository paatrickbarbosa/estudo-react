import './SectionOne.css';
import Casa from '../../../img/casa.png';
import Maca from '../../../img/maca.png';
import Passarinho from '../../../img/passarinho.png';
import Planta from '../../../img/planta.png'
import Mundo from '../../../img/mundo.png'
import Folha from '../../../img/folha.png'
import Energia from '../../../img/energia.png'
import Megafone from '../../../img/megafone.png'

function SectionOne(){
      return(
            <div className="flip-container">
                <div className="flipper">
                    <div className="front">
                      <img className="imagem-home" src={Casa} alt="casa" id="casa"/>
                    </div>
                    <div className="back">
                      <img className="imagem-home" src={Mundo} alt="mundo" id="mundo"/>
                    </div>
                </div>  
                
                <div className="flipper-one">
                    <div className="front">
                      <img className="imagem-home" src={Maca} alt="maca" id="maca"/>
                    </div>
                    <div className="back">
                      <img className="imagem-home" src={Megafone} alt="megafone" id="megafone"/>
                    </div>
                </div>  

                <div className="flipper-two">
                    <div className="front">
                      <img className="imagem-home" src={Passarinho} alt="passarinho" id="passarinho"/>
                    </div>
                    <div className="back">
                      <img className="imagem-home" src={Energia} alt="energia" id="energia"/>
                    </div>
                </div>  

                <div className="flipper-three">
                    <div className="front">
                      <img className="imagem-home" src={Planta} alt="passarinho" id="passarinho"/>
                    </div>
                    <div className="back">
                      <img className="imagem-home" src={Folha} alt="energia" id="energia"/>
                    </div>
                </div>  
            </div>
            
           
      )


    }

    export default SectionOne;

    