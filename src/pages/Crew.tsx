import { Header } from "../components/header/Header"

import { Slider } from "../components/slider/Slider"
import { SlideStyled } from "./Crew.styled"
import { SwiperProps, SwiperSlide as Slide } from 'swiper/react'

import crewBack from "../assets/background/crew.jpg"
import douglas from '/crew/douglas.png'
import mark from '/crew/mark.png'
import victor from '/crew/victor.png'
import anousheh from '/crew/anousheh.png'


export function Crew() {
  
  const settings:SwiperProps = {
    spaceBetween: 50,
    slidesPerView: 1,
    navigation: false,
    pagination: {
      clickable: true
    },
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // }
  }
  return(
    
    <Header Url={crewBack} flex={true} align='flex-end' justify="center" hiddenY={false}>

        <Slider settings={settings}>
         
          <Slide>
            <SlideStyled>
              <div className="textWrapper">
                <div>
                  <h2>commander</h2>
                  <h1>Douglas hurley</h1>
                </div>
                <p>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
                <h2 className="title">MEET YOUR CREW</h2>
              </div>
              <div className='img'>
                <img src={douglas}/>
              </div>
            </SlideStyled>
          </Slide>

          <Slide>
            <SlideStyled>
              <div className="textWrapper">
                <div>
                  <h2>MISSION SPECIALIST</h2>
                  <h1>MARK SHUTTLEWORTH</h1>
                </div>
                <p>Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travei to space as a space tourist.</p>
                <h2 className="title">MEET YOUR CREW</h2>
              </div>
              <div className="img">
                <img src={mark}/>
              </div>
            </SlideStyled>
          </Slide>

          <Slide>
            <SlideStyled>
              <div className="textWrapper">
                <div>
                  <h2>PILOT</h2>
                  <h1>VICTOR GLOVER</h1>
                </div>
                <p>Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Statiom Glover is a commander in the U.S. Navy where he pilots an FIA-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.</p>
                <h2 className="title">MEET YOUR CREW</h2>
              </div>
              <div className="img">
                <img src={victor}/>
              </div>
            </SlideStyled>
          </Slide>

          <Slide>
            <SlideStyled>
              <div className="textWrapper">
                <div>
                  <h2>FLIGHT ENGINEER</h2>
                  <h1>ANOUSHEH ANSARI</h1>
                </div>
                <p>Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS and the first Iranian in space.</p>
                <h2 className="title">MEET YOUR CREW</h2>
              </div>
              <div className="img">
                <img src={anousheh}/>
              </div>
            </SlideStyled>
          </Slide>

        </Slider>

    </Header>
  )
}