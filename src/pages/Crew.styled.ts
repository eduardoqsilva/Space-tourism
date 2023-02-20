import styled from "styled-components";

export const SlideStyled = styled.section`
  max-width: 1400px;
  width: 100%;
  max-height: 700px;
  height: 100%;

  display: flex;
  justify-content: space-between;

  & .textWrapper{
    font-family: 'Bellefair', sans-serif;
    color: #fff;

    position: relative;
    
    max-width: 650px;
    width: 100%;
    height: 100%;
    padding-top: 4rem;
    padding-bottom: 4rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3rem;


    &  h2 {
      font-size: 2rem;
      color: #979797;
      line-height: 48px;
      font-weight: 400;
      text-transform: uppercase;
    }
    &  h1 {
      font-size: 3.5rem; 
      line-height: 84px;
      font-weight: 400;
      text-transform: uppercase;
    }
    &  p {
      font-family: 'Barlow Condensed', sans-serif;
      font-size: 1.125rem;
      line-height: 18px;
    }
    & .title {
      position: absolute;
      top: 1rem;
      
      color: #fff;
      font-size: 1.75rem;

      ::before{
        content: '02';
        display: inline-block;
        margin-right: 2rem;

        color: #4F5058;
      }
    }
  }
  & .img {
    height: 100%;
   
    display: flex;
    align-items: flex-end;
    
    /* background-color: red; */

    & > img {
      position: relative;
      bottom: -2rem;
    }
  }
`