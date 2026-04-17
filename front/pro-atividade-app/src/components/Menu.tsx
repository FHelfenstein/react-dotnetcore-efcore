import {Nav, Container, Navbar, NavDropdown} from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';

const Menu : React.FC = () => {
  const getActiveRoute = useLocation().pathname ? "Active" : ""

  return (
    <Navbar className='dark' bg='dark' expand="lg" variant='dark'>
      <Container>
        <Navbar.Brand as={NavLink} to="/">Painel</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link 
              className={getActiveRoute}
              as={NavLink}
              to='/cliente'
            >
              Clientes
            </Nav.Link>
            <Nav.Link 
              className={getActiveRoute}
              as={NavLink}
              to='/atividade'
            >
              Atividades
            </Nav.Link>
            <Nav.Link 
              className={getActiveRoute}
              as={NavLink}
              to='/contatos'
            >
              Contatos
            </Nav.Link>
            <Nav.Link 
              className={getActiveRoute}
              as={NavLink}
              to='/sobre'
            >
              Sobre
            </Nav.Link>                        
          </Nav>
          <Nav>
            <NavDropdown align="end" title="Fernando" id="basic-nav-dropdown">
              <NavDropdown.Item 
                href="#action/3.1"
              >
                Perfil
              </NavDropdown.Item>
              <NavDropdown.Item 
                href="#action/3.2"
              >
                Configurações
              </NavDropdown.Item>
              <NavDropdown.Item 
                href="#action/3.3"
              >
                Alterar Senha
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item 
                href="#action/3.4"
              >
                Sair
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Menu;