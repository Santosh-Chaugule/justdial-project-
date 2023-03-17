import React from 'react'
import { Form, Button } from 'react-bootstrap'

export default function Login() {
    //2.1 Hooks Area

    //2.2 Function defination area
    let LoginUser = () => {


        let payload = {
            "identifier": document.querySelector('input[type=email]').value,
            "password": document.querySelector('input[type=password]').value,
        }
        console.log(payload);
        //API use for network call
        fetch(`http://localhost:1337/api/auth/local`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        })
            .then(res => res.json())
            .then((data) => {

                if (data["jwt"] !== undefined) {
                    //alert('Welcome')


                    window.location.href = '/business_register'


                    //store the tokan in local storage
                    window.localStorage.setItem('jwt_tokan', data["jwt"])
                } else {
                    alert('Bheed kam')

                }
                console.log(data)
            })
            .catch(err => err)
    }
    return (
        <>

            <h1 className='text-center'>Login Page</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="button" onClick={() => { LoginUser() }}>
                    Submit
                </Button>
            </Form>
        </>
    )
}
