import styled from "styled-components";

interface headerType {
  Url: string
  flex: boolean
}

export const HeaderStyled = styled.header<headerType>`
  
  width: 100vw;
  height: 100vh;
  background-image: url(${ (props) => props.Url});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;

  & main.pageContent {
    position: absolute;
    bottom: 0;
    z-index: 2;

    width: 100vw;
    min-height: calc(100vh - 9rem);

    padding: 1rem;

    ${(props) => props.flex  
    ?
     `display: flex;
      align-items: center;
      justify-content: space-evenly;`
    :
     `display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 100%;
      align-items: center;
      justify-items: center;
    `}
     
    
    /* grid-template-areas: 'a b'; */
    gap: 1rem;
  }
`