import NavBar from "../NavBar/NavBar"
import Hero from "../Hero/Hero"
import BestServices from "../BestServices/BestServices"
import Containimg from "../Containimg/Containimg"
import Trending from "../Trending/Trending"

import logo from '../../assets/img/logo.png'
import bc from '../../assets/img/home.jpg'

const HomePage = () => {
  return (
    <div>
   <NavBar logo={logo} menu={[{path:"/",title:"Home",},
                              {path:"/About",title:"About"},
                              {path:"/Service",title:"Service",},
                              {path:"/Contact",title:"Contact"}]} />  
    <Hero bc={bc} text_hero={"There is no place like Egypt, Let's Explore Together"} x={true}/> 
      <BestServices/>  
     <Containimg/> 
     <Trending/>  
    </div>
  )
}

export default HomePage