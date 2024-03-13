import Logo from '../images/logo.png';


const Home = () => {
    return (
        <>
            <div className='home'>
                <div>
                    <h1>Oi, me chamo <span>Isac!</span></h1>
                    <h3>Sou desenvolvedor Full Stack</h3>
                </div>
                <div>
                    <img className='sLogo' src={Logo} alt='Logo' />
                </div>
            </div>
            <div className='menu'>
                <a>Sobre Mim</a>
                <a>Meus Projetos</a>
            </div>
        </>
    )
}

export default Home;