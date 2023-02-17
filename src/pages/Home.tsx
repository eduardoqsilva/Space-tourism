import { Header } from "../components/header/Header";
import { ButtonStyled, ContentStyled } from "./Home.styled";
import homeImg from '../assets/background/home.jpg'
import { Link } from "react-router-dom";

export function Home() {
  return(
    
    <Header Url={homeImg}>
      <ContentStyled>
          <h2>SO, YOU WANT TO TRAVEL TO</h2>
          <h1>SPACE</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
          </p>
      </ContentStyled>
      <Link to='/Destination'>
        <ButtonStyled>
          Explore
        </ButtonStyled>
      </Link>
    </Header>
    
  )
}