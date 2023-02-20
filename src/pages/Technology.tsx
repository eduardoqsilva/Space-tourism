import { Header } from "../components/header/Header";
import { SwiperProps, SwiperSlide as Slide } from 'swiper/react'
import { Slider } from "../components/slider/Slider";

import { SliderStyled } from "./Technology.styled";

import technology from "../assets/background/technology.jpg"
import img01 from "/technology/01.jpg"
import img02 from "/technology/02.jpg"
import img03 from "/technology/03.jpg"

export function Technology() {

  const settings:SwiperProps = {
    spaceBetween: 50,
    slidesPerView: 1,
    navigation: false,
    direction: "vertical",
    pagination: {
      clickable: true
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    }
  }

  return(
    <>
      <Header Url={technology} flex={true}>
        <Slider settings={settings}>
          <Slide>
            <SliderStyled>
              <div className="textWrapper">
                <span>the terminology...</span>
                <h1>Launch vehicle</h1>
                <p>
                  A Launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, its quite an awe-inspiring sight on the Iaunch pad!
                </p>
                <h2 className="title">SPACE LAUNCH 101</h2>
              </div>
              <div className="img">
                <img src={img01}/>
              </div>
            </SliderStyled>
          </Slide>
          
          <Slide>
            <SliderStyled>
              <div className="textWrapper">
                <span>the terminology...</span>
                <h1>spaceporte </h1>
                <p>
                  A spaceport or cosmodrome is a site for Iaunching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the EarthS rotation for Iaunch.
                </p>
                <h2 className="title">SPACE LAUNCH 101</h2>
              </div>
              <div className="img">
                <img src={img02}/>
              </div>
            </SliderStyled>
          </Slide>

          <Slide>
            <SliderStyled>
              <div className="textWrapper">
                <span>the terminology...</span>
                <h1>SPACE CAPSULE</h1>
                <p>
                  A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where youll spend your time during the flight. lt includes a space gym, cinema, and plenty of other activities to keep you entertained.
                </p>
                <h2 className="title">SPACE LAUNCH 101</h2>
              </div>
              <div className="img">
                <img src={img03}/>
              </div>
            </SliderStyled>
          </Slide>

        </Slider>
      </Header>
    </>
  )
}