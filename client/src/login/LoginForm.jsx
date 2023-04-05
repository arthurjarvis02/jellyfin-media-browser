import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

function LoginForm({user, ...props}) {

    const [isLoading, setLoading] = useState(false);

    return (
        <Form>
            <Form.Group className="mb-3" controlId="formUsername">
                <Form.Control type="email" disabled={isLoading} placeholder="Username" defaultValue={user?.Name} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
                <Form.Control type="password" disabled={isLoading} placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" disabled={isLoading} defaultChecked={true} label="Disable unremembering" />
            </Form.Group>

            <div className="d-grid">
                <Button variant="primary" type="submit" disabled={isLoading}onClick={!isLoading ? () => {setLoading(true)} : null}>
                    {isLoading ? "..." : "Login"}
                </Button>
            </div>
        </Form>
    );
}

export default LoginForm;