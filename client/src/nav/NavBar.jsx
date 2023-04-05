import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container"

function NavBar() {

    return (

        <Navbar bg="light" expand="sm" sticky="top">
            <Container>
                <Navbar.Brand href="/">Jellyfin Media Browser</Navbar.Brand>
                <Navbar.Toggle  />
                <Navbar.Collapse className="justify-content-end">
                <Nav>
                    <Navbar.Text>arthur</Navbar.Text>
                    <Nav.Link href="/settings">Settings</Nav.Link>
                </Nav>
                <Button variant="outline-secondary">Sign Out</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;