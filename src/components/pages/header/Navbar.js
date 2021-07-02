import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button } from '../../Button';
import './Navbar.css'
import { HashLink } from 'react-router-hash-link'

export const Navbar = ({path, setPath}) => {
    // const location = useLocation()
    const history = useHistory()

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    // const [path, setPath] = useState(location.hash)

    const closeMobileMenu = () => {
        setClick(false)
    }

    const showButton = () => {
        var navmenu = document.getElementsByClassName("nav-menu")[0];
        if (window.innerWidth <= 960) {
            setButton(false)
            makeSticky()
        } else {
            setButton(true);
            navmenu.style.backgroundColor = 'none';
        }
    }

    const makeSticky = () => {
        var navbar = document.getElementsByClassName("custom-navbar")[0];
        var navmenu = document.getElementsByClassName("nav-menu")[0];
        var sticky = navbar.offsetTop;
        if (window.pageYOffset > 0) {

            if (window.innerWidth <= 960) {
                navbar.style.backgroundColor = 'rgb(0, 0, 0)';
                navmenu.style.backgroundColor = 'rgb(0, 0, 0)';
            } else {
                navbar.style.backgroundColor = '';
                navmenu.style.backgroundColor = '';
            }
        } else {
            if (window.innerWidth <= 960) {
                navbar.style.backgroundColor = 'rgb(0, 0, 0, 0.5)';
                navmenu.style.backgroundColor = 'rgb(0, 0, 0, 0.5)';
            } else {
                navbar.style.backgroundColor = 'rgb(0, 0, 0, 0.0)';
                navmenu.style.backgroundColor = 'rgb(0, 0, 0, 0.0)';
            }
        }
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")

        } else {
            navbar.classList.remove("sticky");
        }
    }

    const pathChange = (str) => {
        setPath(str)
    }

    useEffect(() => {

        history.listen(() => {
            pathChange(history.location.hash)
        })


        makeSticky()
        window.addEventListener('scroll', makeSticky)
        window.addEventListener('resize', makeSticky)

        showButton();
        window.addEventListener('resize', showButton)
        //Offload
        return () => {
            window.removeEventListener('scroll', makeSticky)
            window.removeEventListener('resize', makeSticky)

            window.removeEventListener('resize', showButton);

        }
    }, []);



    return (
        <>
            <nav className="custom-navbar">
                <div className="navbar-container">
                    <HashLink to="#projects" className="navbar-logo" scroll={(el) => el.scrollIntoView({ behavior: "smooth" })}  onClick={closeMobileMenu}>
                        <img src={`${process.env.PUBLIC_URL}/images/tevin.jpg`} alt="Avatar" className="profile-img" />
                    </HashLink>
                    <div className="menu-icon" onClick={() => setClick(!click)}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                    <div className={click ? 'nav-menu active' : 'nav-menu'}>

                        <HashLink to="#projects" scroll={(el) => el.scrollIntoView({ behavior: "smooth" })} className={path === '#projects' ? 'nav-links active' : 'nav-links'} onClick={closeMobileMenu}>
                            Projects
                        </HashLink>

                        <HashLink to="#skills" scroll={(el) => el.scrollIntoView({ behavior: "smooth" })} className={path === '#skills' ? 'nav-links active' : 'nav-links'} onClick={closeMobileMenu}>
                            Skills
                        </HashLink>


                        <HashLink to="#about-me" scroll={(el) => el.scrollIntoView({ behavior: "smooth" })} className={path === '#about-me' ? 'nav-links active' : 'nav-links'} onClick={closeMobileMenu}>
                            About Me
                        </HashLink>


                        <HashLink to="#contact" scroll={(el) => el.scrollIntoView({ behavior: "smooth" })} className={path === '#contact' ? 'nav-links active' : 'nav-links'} onClick={closeMobileMenu}>
                            Contact
                        </HashLink>

                    </div>
                    {button && <Button buttonStyle='btn--outline'
                        buttonSize='btn--mobile'
                        onClick={closeMobileMenu} pathTo={`${process.env.PUBLIC_URL}/docs/Tevin Taylor's Resume.pdf`}>
                        Download Resume</Button>}
                </div>
            </nav>
        </>
    );
}

