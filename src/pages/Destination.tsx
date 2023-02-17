import { Header } from "../components/header/Header";

import headerBack from '../assets/background/destination.jpg'
import { Tab } from "../components/tabs/Tabs";



export function Destination() {


  return(
    <Header Url={headerBack}>
      <Tab></Tab>
    </Header>
  )
}