import { useState } from "react";
import { ButtonTab, ImageContainerStyled, TabContainerStyled } from "./Tabs.styled";

import moon from '/destination/moon.png'
import mars from '/destination/mars.png'
import europa from '/destination/europa.png'
import titan from '/destination/titan.png'


export function Tab() {
  
  const [activeIndex, setIntex] = useState(0)
  const tabsContent = [
    {
      title: 'Moon', 
      content: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
      distance: '384,400 km',
      travelTime: '3 days',
      imgUrl: moon
    },
    {
      title: 'MARS', 
      content: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest! don’t forget to take a good sunscreen because the days are radiant.',
      distance: '225 mil. km',
      travelTime: '9 months',
      imgUrl: mars
    },
    {
      title: 'EUROPA', 
      content: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
      distance: '628 mil. km',
      travelTime: '3 years',
      imgUrl: europa
    },
    {
      title: 'TITAN', 
      content: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
      distance: '1.6 bil. km',
      travelTime: '3 years',
      imgUrl: titan
    },
  ]

  function handleSetIndex(i:number){
    setIntex(i)
  }

  return(
    <>
      <ImageContainerStyled>
        <h2>PICK YOUR DESTINATION</h2>
        <img src={tabsContent[activeIndex].imgUrl} />
      </ImageContainerStyled>

      <TabContainerStyled>
        <div className="tabs">
          <ButtonTab className="tabs" active={activeIndex === 0} onClick={() => handleSetIndex(0)}>Moon</ButtonTab>
          <ButtonTab className="tabs" active={activeIndex === 1} onClick={() => handleSetIndex(1)}>Mars</ButtonTab>
          <ButtonTab className="tabs" active={activeIndex === 2} onClick={() => handleSetIndex(2)}>Europa</ButtonTab>
          <ButtonTab className="tabs" active={activeIndex === 3} onClick={() => handleSetIndex(3)}>Titan</ButtonTab>
        </div>
        <div className="content">
          <h2>{tabsContent[activeIndex].title}</h2>
          <p>{tabsContent[activeIndex].content}</p>
          <table className="table">
            <tr>
              <th>AVG. DISTANCE</th>
              <th>EST. TRAVEL TIME</th>
            </tr>
            <tr>
              <td>{tabsContent[activeIndex].distance}</td>
              <td>{tabsContent[activeIndex].travelTime}</td>
            </tr>
          </table>
        </div>
      </TabContainerStyled>
    </>
  )
}