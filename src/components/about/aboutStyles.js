import styled from "styled-components";

export const Component = styled.div`
  display:block;
  line-height: 1.7;
  background: var(--background);
  padding: 5em 0 2em 0;
  min-height:100vh;
  // FONT IMPORT
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;0,800;1,400&display=swap");
  font-family: "Montserrat", sans-serif;

  .personal{
    img{
      width:100%;
      object-fit:cover;
      margin:1em 0;
    }
  }
  h1 {
    border-bottom: 1px solid var(--text);
    color: var(--heading);
    font-size:2.8rem;
  }

  h2,
  h3,
  h4 {
    color: var(--heading);
    margin: 1em 0;
  }
  p{
    max-width: 800px;
  }
  a {
    text-decoration: none;
    color: var(--link);
    :hover {
      color: var(--button-hover);
    }
  }
  hr{
    margin-top:1em;
  }

`;

export const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 2em auto 0 auto;
  max-width: var(--app-max-width);
`;
export const Body = styled.div`
  display: grid;
  justify-content:center;
  grid-template-columns:2fr 1fr;
  max-width: var(--app-max-width);
  margin: auto;
  @media (max-width: 1024px){
    grid-template-columns:1fr;
  }
`;
export const Main = styled.div`
  margin: 1em;
  min-width:200px;
`;

export const Aside = styled.div`
  margin: 1em;
  min-width:150px;
  p{
    padding:1em 0;
  }
  .intrest-image{
    float:left;
    min-height:150px;
    object-fit:cover;
    padding:0 1em;
  }
  div{
    margin:5px 0;
  }
  img{
    object-fit:cover;
    width:100%;
    height:100%;
    @media (max-width:1200px){
      object-fit:fill;
    }
  }
`;
