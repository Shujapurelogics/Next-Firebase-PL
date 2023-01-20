import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from '../context/AuthUserContext';
import Link from "next/link";

import { Container, Row, Col, Button, Form, FormGroup, Label, Input, Alert} from "reactstrap";
import {ReactSocialMediaIcons} from 'react-social-media-icons';

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const router = useRouter();
  //Optional error handling
  const [error, setError] = useState(null);

  const { createUserWithEmailAndPassword } = useAuth();

  const onSubmit = event => {
    setError(null)
    if(passwordOne === passwordTwo)
      createUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        console.log("Success. The user is created in firebase")
        router.push("/logged_in");
      })
      .catch(error => {
        setError(error.message)
      });
    else
      setError("Password do not match")
    event.preventDefault();
  };

  return (
    <Container className="c-container" style={{ padding: '0px 0px'}}>
        <div className="logo-div">
            <img className="logo" src="/Logo.svg" alt="Logo"/>
            <h1 className="logo-text-1">anime</h1>
            <h1 className="logo-text-2">yabu.</h1>

        </div>
        <div className="cartoon-div">
            <img className="c1-image" src="/c1.svg" alt="C1" width={145} height={149} />
            <h2 className="c1-text">ようこそ!</h2>
            <p className="c1-p">Bem-vindo(a)!</p>
        </div>
        <div className="form">
          <Form style={{maxWidth: '400px', margin: 'auto'}} onSubmit={onSubmit}>
          { error && <Alert color="danger">{error}</Alert>}
            <FormGroup row>
              <Label className="label" for="signUpEmail" >Email</Label>
                <Input className="input-fields"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  name="email"
                  id="signUpEmail"
                  placeholder="usuario@" />
            </FormGroup>
            <FormGroup row>
              <Label className="label" for="signUpPassword" >Senha</Label>
                <Input className="input-fields"
                  type="password"
                  name="passwordOne"
                  value={passwordOne}
                  onChange={(event) => setPasswordOne(event.target.value)}
                  id="signUpPassword"
                  placeholder="Senha" />
            </FormGroup>
            <FormGroup row>
              <Label className="label" for="signUpPassword2" >Confirmar Senha</Label>
                <Input className="input-fields"
                  type="password"
                  name="password"
                  value={passwordTwo}
                  onChange={(event) => setPasswordTwo(event.target.value)}
                  id="signUpPassword2"
                  placeholder="Confirmar Senha" />
            </FormGroup>
            <FormGroup row>
               <Button className="reg-button">Registrar</Button>
           </FormGroup>
          </Form>
        </div>
        
        <div className="reg-text">
            <p> Ou se registre com </p>
        </div>
        

        <div className="social-icons"> 
            <div className="s-icon">
                <ReactSocialMediaIcons borderWidth="2" borderColor="#FFFFFF" roundness="10px" icon="instagram" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(255, 255, 255, 0.47)" url="https://some-website.com/my-social-media-url" size="48"/>
            </div>
            <div className="s-icon">
                <ReactSocialMediaIcons borderWidth="2" borderColor="#FFFFFF" roundness="10px" icon="twitter" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(255, 255, 255, 0.47)" url="https://some-website.com/my-social-media-url" size="48"/>
            </div>
            <div className="s-icon">
                <ReactSocialMediaIcons borderWidth="2" borderColor="#FFFFFF" roundness="10px" icon="facebook" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(255, 255, 255, 0.47)" url="https://some-website.com/my-social-media-url" size="48"/>
            </div>
        </div>
        
        <div className="bottom-sec">
            <p className="text-color-white">Já é membro ? </p>
            <Link className="text-color-pink" href="/">Faça Login</Link>
        </div>
     

    </Container>
  );
};

export default SignupForm;
