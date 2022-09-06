import './Navbar.css';
import {Link} from "react-router-dom";


function Navbar(){
    return(
      <div className="container">
          <div className="item">
            <ul>
              <li>
                <Link to="/" className='caminho'>Home</Link>
              </li>
              <li>
                <Link to="/galeria" className='caminho'>Galeria</Link>
              </li>
              <li>
                <Link to="/contato" className='caminho'>Contato</Link>
              </li>
            </ul>
          </div>
      </div>
      )
  }

  export default Navbar;