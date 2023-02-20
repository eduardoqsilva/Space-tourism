import styled from "styled-components";

export interface headerType {
  Url: string
  flex?: boolean
  align?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
  hiddenY?: boolean
  hiddenX?: boolean
}

export const HeaderStyled = styled.header<headerType>`
  
  width: 100vw;
  height: 100vh;
  background-image: url(${ (props) => props.Url});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;

  & main.pageContent {
    /* position: absolute;
    bottom: 0; */
    z-index: 2;

    width: 100%;
    height: 100%;
    min-height: calc(100vh - 9rem);

    padding: 1rem;
    padding-top: 8rem;

    ${(props) => props.flex  
    ?
     `display: flex;
      align-items: ${props.align};
      justify-content: ${props.justify};`
    :
     `display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 100%;
      align-items: center;
      justify-items: center;
    `}
    
    /* grid-template-areas: 'a b'; */
    gap: 1rem;
    
    ${(props) => props.hiddenY ? `overflow-y: hidden;`: ''}
    ${(props) => props.hiddenX ? `overflow-x: hidden;`: ''}
  }
`