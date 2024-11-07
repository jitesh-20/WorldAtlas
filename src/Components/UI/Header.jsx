import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const HeaderComponent = () => {
    const [show, setshow] = useState(false)
    const handlebuttonToggle = () => {
        return setshow(!show)
    }

    return (
        <header>
            <div className="container">
                <div className="grid navbar-grid">
                    <div className="Logo">
                        <NavLink to="/">
                            <h1>WORLD ATLAS</h1>
                        </NavLink>
                        {/* <h1>WORLD ATLAS</h1> */}
                    </div>

                    <nav className={show ? "menu-mobile" : "menu-web"}>
                        <ul>
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/country">Country</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about">About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <div className="ham-menu">
                        <button onClick={handlebuttonToggle}>
                            <GiHamburgerMenu />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HeaderComponent;

