import { useEffect, useState } from "react"
import { Navbar, Container, Nav } from "react-bootstrap"
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon3 from '../assets/img/nav-icon3.svg'


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
                    <span className='navbar-toggle-icon'></span>
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
                        <div className='social-icon'>
                            <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/muslimjon-kholjuraev-458879143'>
                                <img src={navIcon1} alt="">
                                </img>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/m_kholjuraev?igsh=MXZraGVoYTBhdXM1Yg%3D%3D&utm_source=qr'>
                                <img src={navIcon3} alt="">
                                </img>
                            </a>
                        </div>
                        <button className='vvd' onClick={() => console.log('connect')}>
                            Let's connect
                        </button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}

export default NavbarComponent;