import React from 'react';
import { Form, Button, FormGroup, FormControl } from "react-bootstrap";

const loginForm = (props) => {
    return (
        <Form horizontal action="#">
            <h3 className="login-title">Sahaj Mail</h3>
            <FormGroup controlId="formHorizontalEmail">
                <FormControl
                    type="input"
                    name="j_email"
                    value={props.email}
                    onChange={(evt) => props.changeEmail(evt)}
                    placeholder="Email" />
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
                <FormControl
                    type="password"
                    name="j_password"
                    value={props.password}
                    onChange={(evt) => props.changePassword(evt)}
                    placeholder="Password" />
            </FormGroup>

            <FormGroup>
                <Button
                    type="submit"
                    disabled={(props.email && props.password) ? false : true}
                    block
                    bsStyle="warning"
                    onClick={props.clicked}
                    >
                    Login
                </Button>
            </FormGroup>
            <Button bsStyle="link">Forgot Password ?</Button>
        </Form>
    )
}

export default loginForm;