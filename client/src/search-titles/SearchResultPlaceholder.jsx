import Placeholder from "react-bootstrap/Placeholder";
import { ListGroupItem } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function SearchResultPlaceholder() {

    return ( 

        <ListGroupItem>
            <Row>
                <Col md="auto">
                    <Placeholder animation="glow">
                        <Placeholder style={{width: "154px", height: "231px"}} />
                    </Placeholder>
                </Col>
                <Col>
                    <Placeholder as="h4" animation="wave">
                        <Placeholder style={{width: "128px"}} />
                    </Placeholder>
                    <Placeholder as="p" animation="wave">
                        <Placeholder style={{width: "40px"}} />
                    </Placeholder>
                    <Placeholder as="p" animation="wave">
                        <Placeholder style={{width: "80%"}} />
                        <Placeholder style={{width: "85%"}} />
                        <Placeholder style={{width: "100%"}} />
                        <Placeholder style={{width: "85%"}} />
                        <Placeholder style={{width: "70%"}} />
                    </Placeholder>
                </Col>
            </Row>
        </ListGroupItem>
    );
}

export default SearchResultPlaceholder;