import dcLogo from '../assets/img/dc-logo.png';

export default function Header() {

    return (
        <header>

            <nav>

                <div className='container d-flex justify-content-evenly align-items-center py-3'>


                    <img src={dcLogo} alt="dcLogo" />


                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Character</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Comic</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Movies</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">TV</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Games</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Collectibles</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Video</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Fans</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">News</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Shop</a>
                        </li>
                    </ul>

                </div>

            </nav>

        </header>
    );

}