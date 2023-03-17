import React from 'react'
import { Button, Form } from 'react-bootstrap'

export default function BusinessRegister() {
    return (
        <>
            <h1 className='text-center'>Register Business </h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>City</Form.Label>
                    <Form.Select aria-label="Default select example">

                        <option>Select city </option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Business Category</Form.Label>
                        <Form.Select aria-label="Default select example">

                            <option>Select Business Category </option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Form.Group>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Business Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter business name" />

                </Form.Group>



                <Button variant="primary" type="button" >
                    Submit
                </Button>
            </Form>
        </>

    )
}
