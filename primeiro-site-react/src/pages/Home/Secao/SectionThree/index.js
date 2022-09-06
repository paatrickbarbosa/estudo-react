import './SectionThree.css';
import {Link} from "react-router-dom";

function SectionThree(){
    return(
        <div className='container-three'>
            <div className='item-three'>
                <div className="faixa">
                    <div className="paragrafo-three">
                        <p>
                            Pellentesque imperdiet, turpis ut varius pharetra, dui erat bibendum sapien, 
                            in cursus enim nunc vel nisi. Suspendisse imperdiet arcu elit, a consequat ex imperdiet quis.
                            Suspendisse vestibulum, elit quis luctus commodo, tellus erat imperdiet elit, pharetra sodales
                            magna nibh eget dui. Aliquam ac tellus quis quam molestie pretium.
                        </p>
                    </div>
                    <Link to="/contato">
                        <button>Cras sed</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default SectionThree;