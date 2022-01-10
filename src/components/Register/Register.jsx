import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Register = (props) => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [email, setEmail] = useState()
    const [first_name, setFirst_name] = useState()
    const [last_name, setLast_name] = useState()
    const [middle_name, setMiddle_name] = useState()
    const [prefix, setPrefix] = useState()
    const navigate = useNavigate()
    let user = {
      username: username,
      password: password,
      email: email,
      first_name: first_name,
      last_name: last_name,
      middle_name: middle_name,
      prefix: prefix,
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        try{
          props.registerUser(user);
          setFirst_name("");
          setLast_name("");
          setUsername("");
          setPassword("");
          setEmail("");
          setMiddle_name("");
          setPrefix("");
          navigate("/")
        } catch (e) {
          console.log(e)
        }
    }

    function handleOnClick() {
      navigate("/")
    }

    return ( 
        <div>
            <Form className="Register" onSubmit={handleSubmit}>
                <Form.Group controlId="firstname">
                  <Form.Label>First Name</Form.Label>
                    <Form.Control onChange={e => setFirst_name(e.target.value)} type="text" required />
                </Form.Group>
                <Form.Group controlId="lastname">
                  <Form.Label>Last Name</Form.Label>
                    <Form.Control onChange={e => setLast_name(e.target.value)} type="text" required />
                </Form.Group>
                <Form.Group controlId="username">
                  <Form.Label>User Name</Form.Label>
                    <Form.Control onChange={e => setUsername(e.target.value)} type="text" required />
                </Form.Group>
                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                    <Form.Control onChange={e => setPassword(e.target.value)} type="text" required />
                </Form.Group>
                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                    <Form.Control onChange={e => setEmail(e.target.value)} type="text" required />
                </Form.Group>
                <Form.Group controlId="middlename">
                  <Form.Label>Middle Name</Form.Label>
                    <Form.Control onChange={e => setMiddle_name(e.target.value)} type="text" required />
                </Form.Group>
                <Form.Group controlId="prefix">
                  <Form.Label>Prefix</Form.Label>
                    <Form.Control onChange={e => setPrefix(e.target.value)} type="text" required />
                </Form.Group>
                <Button type="submit">Submit</Button>
            </Form>
            <Button onClick={handleOnClick}>Sign In</Button>
        </div>
     );
}
 
export default Register;