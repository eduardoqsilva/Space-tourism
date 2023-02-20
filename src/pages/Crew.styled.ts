import styled from "styled-components";

export const SlideStyled = styled.section`
  max-width: 1400px;
  width: 100%;
  max-height: 700px;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  & .textWrapper{
    font-family: 'Bellefair', sans-serif;
    color: #fff;

    /* position: relative; */
    
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
      top: 0rem;
      
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

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-around;
    align-items: center;
    text-align: center;


    & .img {
      height: 250px;
      width: 50%;
      object-fit: contain;
    
      display: flex;
      align-items: flex-end;
      align-items: center;
      justify-content: center;
      border-bottom: 1px solid #fff;
      padding: 1rem;
      margin-top: 2rem;
      
      /* background-color: red; */

      & > img {
        position: static;
        bottom: 0rem;
        height: 100%;
        width: fit-content;
      }
    }

    & .textWrapper{
      
      gap: 1rem;

      &  h2 {
        font-size: 1rem;
      }
      &  h1 {
        font-size: 2em; 
      }
      &  p {
        font-size: 1.125rem;
      }
      & .title {
        font-size: 1.3rem;
        left: 0;
        right: 0;
      }
    }
    
  }
`