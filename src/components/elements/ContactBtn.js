import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import ContactForm from '../contact/ContactForm'

const Wrapper = styled.div`
display:flex;
justify-content:center;
`

const Button = styled(motion.button)`
  background: var(--card-background);
  box-shadow: 0px 1px 10px 5px var(--text);
  border-top: none;
  border-radius: 0 0 0.5em 0.5em;
  cursor: pointer;
  outline: none;
  width: 100px;
  margin: 0 0 1em 0;
  z-index: 99;
  padding: 0;
  i {
    font-size: 2em;
    padding: 2rem 1em 0.5em 1em;
    text-aling: center;
    margin: 0;
    text-shadow: 0px 2px 2px var(--button-hover);
  }
`;

const FormWrapper = styled.div``

//FIX THIS FRAMER MOTION!
function ContactBtn({isForm, handleClick}) {
  return (
    <Wrapper>
      <Button 
        onClick={handleClick}
        initial={{background: 'unset'}}
        whileHover={{background: 'var(--links)',  color: 'var(--card-background)',
        transition: { duration: 1 },
        }}
      >
        <i className="fas fa-envelope-open-text"></i>
      </Button>
      <FormWrapper>
        {isForm && <ContactForm onClick={handleClick} />}
      </FormWrapper>
    </Wrapper>
  );
}

export default ContactBtn;
