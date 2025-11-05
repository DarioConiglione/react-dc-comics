import dcLogo from '../assets/img/dc-logo.png';

export default function Header() {


    const menu = [
        { id: 1, link: '#', text: 'Character', is_active: true },
        { id: 2, link: '#', text: 'Comic', is_active: false },
        { id: 3, link: '#', text: 'Movies', is_active: false },
        { id: 4, link: '#', text: 'TV', is_active: false },
        { id: 5, link: '#', text: 'Games', is_active: false },
        { id: 6, link: '#', text: 'Collectibles', is_active: false },
        { id: 7, link: '#', text: 'Video', is_active: false },
        { id: 8, link: '#', text: 'Fans', is_active: false },
        { id: 9, link: '#', text: 'News', is_active: false },
        { id: 10, link: '#', text: 'Shop', is_active: false },
    ]

    return (
        <header>

            <nav>

                <div className='container d-flex justify-content-around align-items-center py-4'>


                    <img src={dcLogo} alt="dcLogo" />

                    {
                        menu.map(item => (
                            <a className={`nav-link ${item.is_active ? 'current' : ''}`} href={item.link}>{item.text}</a>
                        ))
                    }




                </div>

            </nav>

        </header>
    );

}


{/*   <ul className="nav">
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
                    </ul> */}