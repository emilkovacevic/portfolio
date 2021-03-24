import React from "react";
import { Link } from "react-router-dom";

import { Component, Header, Body, Main, Aside } from "./aboutStyles";
import { personal} from "../../data/data";

function About() {
  return (
    <Component>
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
            </header>
            <p>{personal.aside.main}</p>
            <footer>
              <a href="./data/Resume.pdf" class="button" download>Download</a>
            </footer>
          </section>
          <hr></hr>
          <section>
          <div>
            <h2>{personal.aside.other.heading}</h2>
            {personal.aside.other.intrests.map((intrest, index) => (
              <div key={index}>
                <div>
                  <img src={intrest.image.src} alt={intrest.image.alt} className='intrest-image' />
                  <h4>{intrest.heading}</h4>
                  <p>{intrest.paragraph}</p>
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
