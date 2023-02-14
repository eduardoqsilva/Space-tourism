import { NavBarStyled } from "./NavBar.styled";
import { NavLink, Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'

export function NavBar () {
  return(
    <NavBarStyled>
      <Link to='/' className="logo">
        <img src={logo} />
      </Link>
      <div className="line"></div>
      <ol className="menu" start={0}>
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