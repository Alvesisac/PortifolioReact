import Logo from '../images/logo.png';
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <>
            <div className='home'>
                <div>
                    <h1>Oi, me chamo <span>Isac!</span></h1>
                    <h3>Sou desenvolvedor Full Stack</h3>
                </div>
                <div>
                    <img className='sLogo' src={Logo} alt='Logo'/>
                </div>
            </div>
            <div className='menu'>
                <Link to="/sobremim">Sobre Mim</Link>
                <Link to="/meusprojetos">Meus Projetos</Link>
            </div>
        </>
    )
}

export default Home;