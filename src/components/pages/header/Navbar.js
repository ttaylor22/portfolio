import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '../../Button';
import './Navbar.css'
import { HashLink } from 'react-router-hash-link'

export const Navbar = () => {
   
    const history = useHistory()
    const [path, setPath] = useState(history.location.hash)

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    // const [path, setPath] = useState(location.hash)

    const closeMobileMenu = () => {
        setClick(false)
    }

    const showButton = useCallback(() => {
        var navmenu = document.getElementsByClassName("nav-menu")[0];
        if (window.innerWidth <= 960) {
            setButton(false)
            makeSticky()
        } else {
            setButton(true);
            navmenu.style.backgroundColor = 'none';
        }
    }, [setButton])

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

    const pathChange = useCallback(() => {
        setPath(history.location.hash)
    },[setPath, history])

    useEffect(() => {

        history.listen(pathChange)


        makeSticky()
        //window.addEventListener('hashchange', pathChange, false);
        window.addEventListener('scroll', makeSticky)
        window.addEventListener('resize', makeSticky)

        showButton();
        window.addEventListener('resize', showButton)
        //Offload
        return () => {
            //window.removeEventListener('hashchange', pathChange, false);
            window.removeEventListener('scroll', makeSticky)
            window.removeEventListener('resize', makeSticky)

            window.removeEventListener('resize', showButton);

        }
    }, [pathChange, showButton, history]);



    return (
        <>
            <nav className="custom-navbar">
                <div className="navbar-container">
                    <HashLink to="#projects" className="navbar-logo" scroll={(el) => el.scrollIntoView({ behavior: "smooth" })} onClick={closeMobileMenu}>
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

