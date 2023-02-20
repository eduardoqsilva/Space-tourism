import styled from "styled-components";
import { keyframes } from "styled-components";

interface TabButtonType {
  active: boolean;
}

const RotateLinear = keyframes`
  
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
`

export const ButtonTab = styled.button<TabButtonType>`
  
  background: transparent;
  padding: 0.5rem 0;
  color: #fdfdfd;
  border: none;
  font-family: 'Barlow Condensed', sans-serif;

  margin-right: 1rem;
  font-size: 1.125rem;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 0.5rem;
    text-decoration-thickness: 3px;
    text-decoration-color: #48484a;
  }
  & {
    ${(props) => props.active ? 
    `text-decoration: underline;
    text-underline-offset: 0.5rem;
    text-decoration-thickness: 3px;
    text-decoration-color: #fdfdfd;`:
    ''
    }
  }
`

export const ImageContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4rem;

  & > img {
    width: 26.5625rem;
    height: 26.5625rem;

    animation-name: ${RotateLinear};
    animation-duration: 25s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  & > h2 {
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 400;
    font-size: 1.75rem;

    &::before {
      content: '01';
      display: inline-block;
      font-size: 1.75rem;
      color: #4F5058;
      margin-right: 2rem;
      font-weight: 500;
    }
  }

  @media (max-width: 900px){
    align-items: center;

    & > img {
      width: 10.5625rem;
      height: 10.5625rem;
    }
  }
`

export const TabContainerStyled = styled.section`
  max-width: 35.6875rem;
  min-height: 24.0625rem;
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 400;
  
 
  & div.content > h2 {
    font-family: 'Bellefair', sans-serif;
    font-weight: 400;
    font-size: 6.25rem;
    text-transform: uppercase;
    margin: 1rem 0 1rem 0;
  }
  & div.content > p {
    font-size: 1.125rem;
    line-height: 1.6875rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid #494a53;
  }
  & .table {
    margin-top: 2rem;
    min-width: 250px;
    text-align: left;
    line-height: 2rem;

    th{
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 400;
      font-size: 0.875rem;
    }
    td{
      font-family: 'Bellefair', sans-serif;
      font-size: 1.75rem;
    }
    td,tr{
      padding-right: 4rem;
    }
  }
  @media (max-width: 900px) {
    text-align: center;

    & .table {
      text-align: center;
      margin: auto;
      margin-top: 1rem;

     & td,tr{
      padding-right: 0rem;
    }
    }
    
  }
`