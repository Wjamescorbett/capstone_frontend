import React, {useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
    const [username, setUsername] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault();
        let results = await axios({
            method: 'POST',
            url: "http://127.0.0.1:8000/api/auth/login/",
            data: { 
                username: username,
                password: userPassword
            },
        })
        setUsername('');
        setUserPassword('');
        localStorage.setItem('access', results.data.access);
        window.location = "/";
    }
    
    function handleOnClick(){
        navigate("/register")
    }


    return ( 
        <div>
            <h1>WELCOME TO QUOTE SHARE!</h1>
            <h3>Please Sign In</h3>
            <Form className="Login" onSubmit={handleSubmit}>
                <Form.Group controlId="username">
                <Form.Label>User Name</Form.Label>
                    <Form.Control onChange={e => setUsername(e.target.value)} type="text" required />
                </Form.Group>   
                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={e => setUserPassword(e.target.value)} type="text" required />
                </Form.Group>
                <Button type="submit">Submit</Button>
            </Form>
            <Button onClick={()=>handleOnClick()}>Register</Button>
        </div>
    );
}

export default Login;