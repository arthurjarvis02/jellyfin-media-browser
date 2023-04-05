import Container from "react-bootstrap/Container"
import NavBar from "./NavBar"

function NavPage({children, ...props}) {

    return (
        <>
            <NavBar />
            <Container>
                {children}
            </Container>
        </>
    )
}

export default NavPage;