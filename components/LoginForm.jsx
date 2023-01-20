import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { useAuth } from '../context/AuthUserContext';

import {Container, Row, Col, Button, Form, FormGroup, Label, Input, Alert} from 'reactstrap';

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();
  const { signInWithEmailAndPassword } = useAuth();

  const onSubmit = event => {
    setError(null)
    signInWithEmailAndPassword(email, password)
    .then(authUser => {
      console.log("Success. The user is created in firebase")
      router.push('/logged_in');
    })
    .catch(error => {
      setError(error.message)
    });
    event.preventDefault();
  };

  return (
    <Container className="c-container container-fluid" style={{ padding: '0px 0px'}}>
        <div className="logo-div">
            <img className="logo" src="/Logo.svg" alt="Logo" height={46} width={46}/>
            <h1 className="logo-text-1">anime</h1>
            <h1 className="logo-text-2">yabu.</h1>
        </div>
        <div className="cartoon-div">
            <img className="c1-image" src="/c2.svg" alt="C1" width={165} height={169} />
            <h1 className="c1-text">ひさしぶり!</h1>
            <h4 className="c1-p">Olá, sentimos sua falta!</h4>
        </div>
      <div style={{maxWidth: '400px', margin: 'auto'}}>
        <div>
          <Form onSubmit={onSubmit}>
          { error && <Alert color="danger">{error}</Alert>}
            <FormGroup row>
              <Label className="label" for="loginEmail" >Login</Label>
                <Input className="input-fields"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  name="email"
                  id="loginEmail"
                  placeholder="Email" />
            </FormGroup>
            <FormGroup row>
              <Label className="label" for="loginPassword" >Senha</Label>
                <Input className="input-fields"
                  type="password"
                  name="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  id="loginPassword"
                  placeholder="Senha" />
            </FormGroup>
            <FormGroup row>
               <Button className="reg-button">Login</Button>
           </FormGroup>
           <FormGroup row>
            <Col className='text-color-white bottom-sec'>
            Não tem conta ? <Link className="text-color-pink" href="/signupPage"> Registre-se</Link>
            </Col>
          </FormGroup>
          </Form>
        </div>
      </div>
    </Container>
  )
}
