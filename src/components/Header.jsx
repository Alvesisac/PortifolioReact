import Logo from '../images/logo.png'


const Header = (props) => {
    return(
        <>
            <header className='styleHeader'>
                <img src={Logo} />
                <h2>{props.titulo}</h2>
            </header>
        </>
    )
}

export default Header;