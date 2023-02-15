import { NavBarStyled } from "./NavBar.styled";
import { NavLink, Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { useState } from "react";

export function NavBar () {
  const [menu, SetMenu] = useState(false)

  function handleMenutoogle(){
    SetMenu((state) => !state)
  }
  return(
    <NavBarStyled  menu={menu}>
      <Link to='/' className="logo">
        <img src={logo} />
      </Link>
      <div className="line"></div>
      <div className="menuIcon">
        <input type="checkbox" name="menu" id="menu" onChange={handleMenutoogle} />
        <label htmlFor="menu"></label>
        <label htmlFor="menu"></label>
        <label htmlFor="menu"></label>
      </div>
      
      <ol className="menu" start={0} id="test">
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/Destination'>Destination</NavLink>
        </li>
        <li>
          <NavLink to='/Crew'>Crew</NavLink>
        </li>
        <li>
          <NavLink to='/Technology'>Technology</NavLink>
        </li>
      </ol>
      
      
      
      
      
    </NavBarStyled>
  )
}