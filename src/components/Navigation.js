import React from 'react'
import { Button, Container, Nav, Navbar, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from '../../src/logo.svg'


export default function Navigation() {

    //2.2 . FUnction defination 
    let myLogout = () => {
        window.localStorage.removeItem('jwt_tokan');
        window.location.href = '/login'
    }
    return (
        <>
            <Navbar bg="light" expand="lg" className='h-100 m-auto'>
                <Container fluid className='h-100 m-auto'>
                    <Navbar.Brand href="#" className='h-100 p-0 m-0 '>
                        <img
                            src={Logo}
                            width="100"
                            height="100"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                        <Nav
                            className="me-auto my-2 my-lg-0 float-end text-end"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link to="/" className='btn btn-link'>Home</Link>

                            {
                                window.localStorage.getItem('jwt_tokan') === null &&
                                <>
                                    <Link to="/login" className='btn btn-link'>Login</Link>
                                    <Link to="/register" className='btn btn-link'>Register</Link>
                                </>

                            }
                            {
                                window.localStorage.getItem('jwt_tokan') !== null &&
                                <Nav.Link onClick={() => { myLogout() }} className="btn btn-link"> Logout</Nav.Link>
                            }

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
