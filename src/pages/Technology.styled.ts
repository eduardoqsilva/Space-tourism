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
  & .img{

  }
`