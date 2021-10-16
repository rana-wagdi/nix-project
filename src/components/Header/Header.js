import logo from '../../assets/header/logo.png'

import { useState } from 'react';



const Header = () => {
    const [open, setOpen] = useState(false);
    const showMenu = () => setOpen(!open);

    const humburerIcon =
        <div
            className="humburger"
          
            onClick={() => setOpen(!open)}
        />

    const closeIcon =
        <div
            className="humburger-close"
            onClick={() => setOpen(!open)}
        />
    return (
        <header className="header">
            <nav className="navbar">
                <div className="logo">
                    <figure>
                        <img src={logo} alt="NIX-logo" />
                    </figure>
                </div>

                <div className="navbar__links">
                    <ul>
                        <li>home</li>
                        <li>services</li>
                        <li>about</li>
                        <li>portfolio</li>
                        <li>videos</li>
                        <li>contact US</li>
                    </ul>
                </div>
                <div className="contact-button">
                    <button>contact us now</button>
                </div>


                <div className="header-burger" onClick={showMenu}>
                    {open ? closeIcon : humburerIcon}
                    {open && (
                        <div className="burger-list">
                        <ul className="header-burger__links">
                            <li className="option">home</li>
                            <li className="option">services</li>
                            <li className="option">about</li>
                            <li className="option">portfolio</li>
                            <li className="option">videos</li>
                            <li className="option">contact US</li>
                        </ul>
</div>
                    )}

                </div>
            </nav>




        </header>
    )
}

export default Header;