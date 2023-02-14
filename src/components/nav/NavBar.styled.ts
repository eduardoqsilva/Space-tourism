import styled from "styled-components";

export const NavBarStyled = styled.nav`
 
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 500;
  font-size: 1.2rem;

  display: flex;
  align-items: center;
  padding: 2rem 0 0 2rem;

  position: fixed;
  top: 0;

  width: 100vw;

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

`