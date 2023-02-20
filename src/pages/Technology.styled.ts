import styled from "styled-components";

export const SliderStyled = styled.section`
  width: 100%;
  height: 100%;
  /* background-color: gray; */

  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 3rem;
  padding-top: 4rem;

  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 400;

  & .textWrapper {
    width: 100%;
    max-width: 697px;

    & span {
      font-size: 1rem;
      color: #D0D6F9;
      text-transform: uppercase;
      line-height: 21px;
    }
    & h1 {
      font-family: 'Bellefair', sans-serif;
      font-size: 3.5rem;
      font-weight: 400;
      text-transform: uppercase;
      line-height: 86px;
    }
    & p {
      font-size: 1.125rem;
      line-height: 32px
    }
    & .title {
      position: absolute;
      top: 4rem;

      font-weight: 400;
      font-size: 1.75rem;
      text-transform: uppercase;

      &::before {
        content: '03';
        display: inline-block;
        margin-right: 2rem;
        color: #4F5058;
      }
    }
  }

  @media (max-width: 900px) {
    flex-direction: column;

    .img {
      width: 250px;
      height: 250px;

      & img {
        display: block;
        width: 100%;
        height: 250px;
        object-fit: contain;
      }
    }

    & .textWrapper {
      width: 100%;
      max-width: 697px;
      text-align: center;

      & span {
        font-size: 1rem;
      }
      & h1 {
        font-size: 1.5rem;
      }
      & p {
        font-size: 1.125rem;
      }
      & .title {
        font-size: 1rem;
        top: 0;
      } 
    }
  }
`