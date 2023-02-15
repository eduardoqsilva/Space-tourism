import styled from "styled-components";

interface navtype {
   menu?: boolean
}

export const NavBarStyled = styled.nav<navtype>`
 
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 500;
  font-size: 1.2rem;

  display: flex;
  align-items: center;
  padding: 0 0 0 2rem;

  position: fixed;
  top: 0;

  width: 100vw;

  z-index: 10;

  & div.line {
    background-color: #fff;
    flex-grow: 3;
    height: 1px;
    opacity: 0.3;
    margin-right: -1rem;
    z-index: 2;
  }
  & a.logo{
    margin-right: 4rem;
    margin-top: 3rem;
  }
  & a {
    text-decoration: none;
    color: #fff;
  }

  & ol.menu {
    list-style-type: decimal-leading-zero;
    display: flex;
    justify-content: center;
    gap: 15%;
    flex-grow: 2;
    
    padding: 3rem 3rem 3rem 4rem;

    /* From https://css.glass */
    background: rgba(255, 255, 255, 0.09);
    border-radius: 1px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(4.3px);
    -webkit-backdrop-filter: blur(4.3px);

  }
  & ol.menu li {
    position: relative;
    height: 100%;
  }
  & ol.menu a.active::after {
    
    content: '';
    display: block;
    position: absolute;
    bottom: -3rem;
    left: -24px;
    
    width: calc(100% + 25px);
    height: 2px;
    background-color: #fff;
  }
  & ol.menu a {
    padding: 1rem 0;
  }
  & div.menuIcon{
    width: 45px;
    height: 35px;
    
    position: fixed;
    right: 1rem;
    top: 3rem;
    z-index: 20;
    display: none;
  }

  & div.menuIcon label {
    display: block;
   
    width: 45px;
    height: 5px;

    background-color: #fff;
    border-radius: 2px;
    position: absolute;

    transition: 0.1s ease-in;
    
    &:nth-child(2){
      top: 0px;
    }
    &:nth-child(3){
      top: 15px;
    }
    &:nth-child(4){
      bottom: 0px;
    }
  }
  & #menu {
    opacity: 0;
  }

  & #menu:checked ~ label:nth-of-type(1) {
    transition: 0.1s ease-in;
    transform: rotate(45deg);
    top: 15px;
  }
  & #menu:checked ~ label:nth-of-type(2) {
    transition: 0.1s ease-in;
    opacity: 0;
  }
  & #menu:checked ~ label:nth-of-type(3) {
    transition: 0.1s ease-in;
    transform: rotate(-45deg);
    bottom: 15px;
  }


 
  @media (max-width: 900px) {
    & ol.menu{
      ${(props) => props.menu 
      ?
        `display: flex;
        flex-direction: column;
        
        gap: 2rem;
        padding-top: 4rem;
        list-style: none;`
        
        : `display: none;`
      }
      
    }
    & div.menuIcon {
      display: block;
    }
    & ol.menu a.active::after {
      bottom: -2px;
      left: 0;
      width: 100%;
    }
    & ol.menu a{
      display: block;
    }
    &{
      align-items: flex-start;
    }
    & .line {
        display: none;
    }
  }
`