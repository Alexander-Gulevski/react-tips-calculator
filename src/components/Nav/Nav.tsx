import logo from '../../assets/logo.svg';
import './styles.scss';

const Nav = () => {
    return (
        <nav className="nav">
            <img className="nav__logo" src={logo} alt="logo" />
            <ul className="nav__list">
                <li className="nav__item">
                    <a href="/" className="nav__link">
                        Feautures
                    </a>
                </li>
                <li className="nav__item">
                    <a href="/" className="nav__link">
                        Partners
                    </a>
                </li>
                <li className="nav__item">
                    <a href="/" className="nav__link">
                        Stories
                    </a>
                </li>
            </ul>
            <button
                className="nav__button"
                type="button"
                area-label="download for free"
            >
                Download for free
            </button>
        </nav>
    );
};

export default Nav;
