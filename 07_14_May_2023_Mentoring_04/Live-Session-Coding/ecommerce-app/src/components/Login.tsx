
import {Form, Button} from "react-bootstrap";

import {FormEvent, useRef} from "react";
import {useNavigate} from "react-router-dom";

import {users} from "../data/users"

const Login = () => {

  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const handleSubmit = (event : FormEvent<HTMLFormElement>) => {

    event.preventDefault();

    // a.b.c
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    const matchedUser = users.find( (usernameElement) => {

      return (usernameElement.username === username && 
        usernameElement.password === password)

    })

    if (matchedUser){
      navigate("/shopping");
    }else{

    }

  }

  return (
    <div style={{justifyContent: 'center', alignItems: 'center', margin: '0 auto', display : 'flex'}}>

    {/* <h2>Login Form</h2> */}

    <Form onSubmit={handleSubmit}>

      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter Username" ref={usernameRef} />        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" ref={passwordRef}/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>

    </Form>

    </div>
  );

}

export {Login}
