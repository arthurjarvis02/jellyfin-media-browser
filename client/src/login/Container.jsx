import Card from "react-bootstrap/Card";

function Container({title, children, ...props}) {

    return (
        <Card>
            <Card.Body>
                <h2 className="text-center">{title}</h2>
                {children}
            </Card.Body>
        </Card>
    );
}

export default Container;