import styled from "styled-components";


export const ContentStyled = styled.article`
  max-width: 500px;
  width: 100%;
  height: auto;
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 400;
  color: #c3c5de;
  text-align: left;


  & h2 {
    font-weight: 400;
    font-size: 2.625rem;
  }

  & h1 {
    font-family: 'Bellefair', sans-serif;
    font-weight: 400;
    font-size: 9.375rem;
    color: #fdfdfd;
  }

  & p {
    font-size: 1.125rem;
  }

  @media (max-width: 900px){
    text-align: center;

    & h2 {
      font-size: 1.625rem;
    }
    & h1 {
      font-size: 7.375rem;
    }

  }
`

export const ButtonStyled = styled.button`
  width: 17rem;
  height: 17rem;
  border: none;

  border-radius: 50%;

  font-family: 'Bellefair', sans-serif;
  font-size: 2rem;
  text-transform: uppercase;

  &:hover {
    -webkit-box-shadow: 0px 0px 0px 76px rgba(255,255,255,0.31);
    -moz-box-shadow: 0px 0px 0px 76px rgba(255,255,255,0.31);
    box-shadow: 0px 0px 0px 76px rgba(255,255,255,0.31);
  }

  @media (max-width: 900px) {
    width: 12rem;
    height: 12rem;
  }
`