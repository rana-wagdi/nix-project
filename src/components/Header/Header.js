import logo from '../../assets/header/logo.png'



const Header = ()=>{
    return(
        <header>
        <nav>
            <div>
                <figure>
                    <img src={logo} alt="NIX-logo" />
                </figure>
            </div>

            <div>
                <ul>
                    <li>home</li>
                    <li>services</li>
                    <li>about</li>
                    <li>portfolio</li>
                    <li>videos</li>
                    <li>contact US</li>
                </ul>
            </div>
            <div>
                <button>contact us now</button>
            </div>
            </nav>
        </header>
    )
}

export default Header;