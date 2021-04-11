import React from "react";
import { Link } from "react-router-dom";

import { Component, BackToHome, Header, Body, Main, Aside } from "./aboutStyles";
import { personal} from "../../data/data";

function About() {
  return (
    <Component>
        <BackToHome href="https://www.emilkovacevic.com" ><i className="fas fa-home"></i></BackToHome>
      <Header>
        <h1>{personal.name}</h1>
      </Header>
      <Body>
        <Main>
          <div>
            <h2>{personal.heading}</h2>
            <p>{personal.introduction}</p>
          </div>
          <div class='personal'>
            <img src={personal.aboutIMG} alt={personal.name} />
            <h3>{personal.aboutHeading}</h3>
            <p>{personal.aboutMe} </p>
          </div>
          <div>
            <h3>{personal.intrestHeading}</h3>
            <p>{personal.intrest}</p>
          </div>
          <div>
            <h3>{personal.skillHeading}</h3>
            <p>{personal.techList}</p>
            <p>{personal.message}</p>
          </div>
        </Main>
        <Aside>
          <section>
            <header>
              <h2>
                <Link to="cv">{personal.aside.mainHeading}</Link>
              </h2>
              <hr/>
            </header>
            <p>{personal.aside.main}</p>
            <footer>
              <Link to="cv"               
              style={{
                display:"flex",
                border: "1px solid var(--text)",
                padding:'0.5em 1em',
                background: "var(--heading)",
                color:"var(--background)",
                justifyContent:"center"
              }}>Open</Link>
            </footer>
              <br/>
          </section>
          <section>
          <div>
            <hr/>
            <h2>{personal.aside.other.heading}</h2>
            {personal.aside.other.intrests.map((intrest, index) => (
              <div key={index}>
                <div
                style={{
                  display:'grid',
                  gridTemplateColumns: "1fr 1fr",
                }}>
                 <div>
                    <img src={intrest.image.src} alt={intrest.image.alt} className='interest-image' />
                 </div>
                  <div
                  style={{marginLeft:"1em"}}
                  >
                      <h2>{intrest.heading}</h2>
                      <p>{intrest.paragraph}</p>
                  </div>
                </div>
              </div>
            ))}
					</div>
          </section>
        </Aside>
      </Body>
    </Component>
  );
}

export default About;
