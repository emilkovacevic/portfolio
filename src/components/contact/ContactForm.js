import React from "react";
import styled from "styled-components";

const FormComponent = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background: var(--background);
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  overflow-Y:scroll;
  z-index:999;
  .closeForm{
    position:absolute;
    top: 1.5rem;
    right: 1.5rem;
    border:none;
    background:none;
    font-size:1.8rem;
    color:var(--text);
    cursor: pointer;
    :focus, :hover{
      color: var(--button-hover);
    }
  }
`;

const FormWrapper = styled.div`
  margin: 5rem 5% 5% 5%;
  display:block;
  color:var(--text);
  line-height:1.8;
  .top-info{
      border-bottom:1px solid var(--text);
      padding-bottom:1em;
      margin-bottom:1em;
  }
  .required{
      color:red;
      padding-left: 0.2em;
      font-size:0.8rem;
      font-weight:400;
  }
  .item{
    margin:1em 0;
  }
  .item-email{
    width:100%;
    min-width:200px;
    margin:1em 0;
  }
  #radio_1, #radio_2{
    margin:1em 0;  
    margin-right:1em;
  }
  #text-box{
      margin:1em 0;
  }
  .cover-letter{
    border-top: 1px solid var(--text);
    border-bottom: 1px solid var(--text);
    margin: 1em 0;
    padding:1em 0;
  }
  textarea{
    width:100%;
    min-width:200px;
    min-height:150px;
  }
  .buttons{
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
  }
  .submit-btn,
  .reset-btn{
    cursor:pointer;
    padding: 1em 2em;
    margin-bottom:1em;
  }
  .file{
    margin-top:1em;
  }
  .submit-btn{
    padding: 1em 25%;
    margin-right:1em;
  }
  span{
    margin:auto;
    font-size:1.2rem;
    font-weight:600;
  }
  @media (max-width: 320px){
    padding-top:150%;
    margin:0 0.5em;
    *{
      max-width:250px;
      padding: 0;
      margin:auto;
    }
    .buttons{
      display:block;
      padding:0;
    }
  }
`;



function ContactForm({onClick}) {

  const handleClick = () =>{
    onClick()
  }
  return (
    <FormComponent>
      <div>
        <button className='closeForm' onClick={handleClick}><i className="fas fa-times-circle"></i></button>
      </div>
      <FormWrapper>
        <form>
          <div>
            <h2>Contact Form</h2>  
            <p className="top-info">
              Thank you for your interest in contacting me. <br />
              Please fill the form below to reach me or shoot me an <em><a href="mailto:emil.kovacevic.dev@gmail.com">e-mail</a></em>.
            </p>
          </div>
          <div className="item">
            <p>
              Email<span className="required">*</span>
            </p>
            <input type="text" name="name" className='item-email' required />
          </div>
          <div>
            <h4>Please tell me who you are.<span className="required">*</span></h4>
            <div>
              <input
                type="radio"
                value="none"
                id="radio_1"
                name="status"
                required
              />
              <label for="radio_1" className="radio">
                <span>Recruiter</span>
              </label>
            </div>
            <div>
              <input
                type="radio"
                value="none"
                id="radio_2"
                name="status"
                required
              />
              <label for="radio_2" className="radio">
                <span>Other</span>
              </label>
            </div>
          </div>
          <div className="item cover-letter">
            <label for="text-box">
              Cover Letter
              <br />
              <textarea id='text-box' ></textarea>
            </label>
          </div>
          <div className='item'>
            <p>File types allowed: pdf, doc, txt, png, jpeg, zip, rar - max 200Mb </p>
            <p><em><small>Feel free to contact me even if your files don't meet the requirements.</small></em></p>
            <input type='file' className='file' multiple></input>
          </div>
          <div className="item buttons">
            <button type="submit" className='submit-btn'>
              <span>Submit</span>
            </button>
            <button type="reset" className='reset-btn'><span>Reset</span></button>
          </div>
        </form>
      </FormWrapper>
    </FormComponent>
  );
}

export default ContactForm;
