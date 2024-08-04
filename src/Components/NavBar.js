import { useEffect, useState } from "react"
import { Navbar, Container, Nav } from "react-bootstrap"
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon3 from '../assets/img/nav-icon3.svg'
import LetsConnectButton from "./LetsConnectButton";
import LinkTargetBlank from "./LinkTargetBlank";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavbarComponent = () => {
    const [activeLint, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50){
                setScrolled(true);
            }else {
                setScrolled(false);
            }
        }

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onscroll);
    }, []);

    const onUpdateActiveLink = (value) =>{
        setActiveLink(value);
    }

    return (
        <Navbar expand='lg' className={scrolled ? 'scrolled': ''}>
            <Container>
                <Navbar.Toggle aria-controls='basic-navbar-nav'>
                    <span className='navbar-toggle-icon' style={{color: '#fff' }}>
                        <FontAwesomeIcon icon={faBars} />
                    </span>
                </Navbar.Toggle>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='me-auto'>
                        <Nav.Link 
                            href='#home'
                            className={activeLint === 'home' ? 'active navbar-link': 'navbar-link'}
                            onClick={() => onUpdateActiveLink('home')}
                         >
                            Home
                        </Nav.Link>
                        <Nav.Link 
                            href='#skills' 
                            className={activeLint === 'skills' ? 'active navbar-link': 'navbar-link'}
                            onClick={() => onUpdateActiveLink('skills')}
                        >
                            Skills
                        </Nav.Link>
                    </Nav>
                    <span className='navbar-text'>
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col">
                                <div className='social-icon'>
                                    <LinkTargetBlank href='https://www.linkedin.com/in/muslimjon-kholjuraev-458879143'>
                                        <img src={navIcon1} alt="" />
                                    </LinkTargetBlank>
                                    <LinkTargetBlank href='https://www.instagram.com/m_kholjuraev?igsh=MXZraGVoYTBhdXM1Yg%3D%3D&utm_source=qr'>
                                        <img src={navIcon3} alt="" />
                                    </LinkTargetBlank>
                                </div>
                            </div>
                            <div class="col">
                                <LetsConnectButton />
                            </div>
                        </div>
                        </div>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}

export default NavbarComponent;