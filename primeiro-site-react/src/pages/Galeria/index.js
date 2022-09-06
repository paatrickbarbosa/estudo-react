import './carousel.css';
import Rino from '../img/rino.png';
import Gira from '../img/gira.png';
import Zebra from '../img/zebra.png';
import Suricato from '../img/suricato.png';
import Elefante from '../img/elefante.png';
import Onca from '../img/onca.png'


function Galeria(){
    return(
        <div className="container-carousel">
            <div className="item-carousel">
                <div className="card">
                    <img src={Rino} alt="Rino" id="rino"  className="imagem-carousel"/>
                </div>
                <div className="card">
                    <img src={Gira} alt="Gira" id="gira"  className="imagem-carousel"/>
                </div>
                <div className="card">
                    <img src={Zebra} alt="Zebra" id="zebra"  className="imagem-carousel"/>
                </div>
                <div className="card">
                    <img src={Suricato} alt="Suricato" id="suricato"  className="imagem-carousel"/>
                </div>
                <div className="card">
                    <img src={Elefante} alt="Elefante" id="elefante"  className="imagem-carousel"/>
                </div>
                <div className="card">
                    <img src={Onca} alt="Onca"  id="onca" className="imagem-carousel"/>
                </div>
            </div>

            
        </div>
    );
}

export default Galeria;