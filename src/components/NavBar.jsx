import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/logoImg.png';

import github from '../assets/github.png';
import facebook from '../assets/facebook.png';
import linkedin from '../assets/linkedin.png';

import { BrowserRouter as Router } from 'react-router-dom';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === 'home' ? 'active navbar-link' : 'navbar-link'
                }
                onClick={() => onUpdateActiveLink('home')}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#about"
                className={
                  activeLink === 'about' ? 'active navbar-link' : 'navbar-link'
                }
                onClick={() => onUpdateActiveLink('about')}
              >
                About
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'
                }
                onClick={() => onUpdateActiveLink('skills')}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#project"
                className={
                  activeLink === 'project'
                    ? 'active navbar-link'
                    : 'navbar-link'
                }
                onClick={() => onUpdateActiveLink('project')}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                href="#contact"
                className={
                  activeLink === 'contact'
                    ? 'active navbar-link'
                    : 'navbar-link'
                }
                onClick={() => onUpdateActiveLink('contact')}
              >
                Contact me
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://github.com/pennyjiang925">
                  <img src={github} alt="" />
                </a>
                <a href="https://www.facebook.com/penny.jiang1/">
                  <img src={facebook} alt="" />
                </a>
                <a href="https://www.linkedin.com/in/penny-jiang-871096198/">
                  <img src={linkedin} alt="" />
                </a>
              </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
