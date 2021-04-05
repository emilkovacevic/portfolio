import React, { useState } from "react";
import styled, {keyframes}from "styled-components";
import {db} from "./components/contact/firebase/firebase";


const FormComponent = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  bottom:0;
  right:0;
  background: rgba(0,0,0,0.5);
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  overflow-Y:scroll;
  z-index:999;
  button{
    cursor: pointer;
  }
  }
`;

const Container = styled.div`
  background: var(--background);
  padding: 2em;
  form {
    display: flex;
    flex-flow: column wrap;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1em;
`;
const Main = styled.div`
  margin: 0 1em;
  padding: 1em 0;
  .required{
    color:red;
  }
  h5 {
    margin: 1em 0;
  }
  label {
    margin-top: 1em;
    margin-bottom: 0.5em;
  }
  button {
    margin: 1em 0 0 0;
    padding: 1em 0;
    :hover, :focus{
      background:var(--text);
      transform:scale(1.023)
    }
  }
`;

const dotAnimaton = keyframes`
  0%, 40%, 100% {
    opacity: 0.5;
  }
  20% {
    opacity: 1;
  }
}
`

const WaitingDots = styled.div`
display:flex;
flex-flow:column;
justify-content:center;
align-items:center;

  .dot {
    display: inline-block;
    vertical-align: baseline;
    animation-name: ${dotAnimaton};
    animation-duration: 1s;
    animation-iteration-count: 10;
    animation-timing-function: ease;
    animation-delay: .2s;
    font-size: 50px;
  }
  
  .dot:first-child {
     animation-delay: 0s;
  }
  .dot:last-child {
    animation-delay: .4s;
  
}
`



function Form({ onClick }) {
  //form closer
  const handleClick = () => onClick();


  //form
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);



  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    setSendSuccess(false)
    
    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
        date: new Date().toTimeString()
      })
      .then(() => {
        setLoader(false);
        setSendSuccess(true)
       setTimeout(() => {
         onClick();
         setSendSuccess(false)
       }, 5000);

      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
        setSendSuccess(false)
      });

    setName("");
    setEmail("");
    setMessage("");
  };


  return (
    <FormComponent>

      {!sendSuccess ? 
      <Container>
        <Header>
          <h3>Contact Form</h3>
          <button onClick={handleClick}>close</button>
        </Header>
        <Main>
          <h5>Thank you for reaching out, please fill the form.</h5>
          <form className="form" onSubmit={handleSubmit}>
          <label>Name<span className="required">*</span></label>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label>Email<span className="required">*</span></label>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label>Message<span className="required">*</span></label>
      <textarea
        rows="10"
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      ></textarea>
  
      <button
        type="submit"
        style={{ background: loader ? "#ccc" : "white" }}
      >
        {loader ?<div> <h5>Sending Data</h5> <span>Please Wait<span className="dot">.</span><span className="dot">.</span><span className="dot">.</span></span></div> : <span>Submit</span>}
      </button>
          </form>
        </Main>
      </Container>
      :
      <Container>
        <p>Thank you, I will contact you as soon as possible <i class="far fa-smile"></i></p>
        <WaitingDots >
          <p><small>auto closing form</small></p>
          <div className="dots"><span className="dot">.</span><span className="dot">.</span><span className="dot">.</span></div>
        </WaitingDots>
      </Container>
    }
    </FormComponent>
  );
}

export default Form;
