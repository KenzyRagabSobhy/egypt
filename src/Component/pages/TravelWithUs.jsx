import NavBar from "../NavBar/NavBar"
import Hero from "../Hero/Hero"
import logo from '../../../public/assets/img/logo.png'
import bc from '../../../public/assets/img/se.jpg'
import CardTravel from "../CardTravel/CardTravel"

const TravelWithUs = () => {
  return (
    <div>
    <NavBar logo={logo} menu={[{path:"/",title:"Home",},
                              {path:"/About",title:"About"},
                              {path:"/Service",title:"Service",},
                              {path:"/Contact",title:"Contact"}]}/>  
     <Hero bc={bc} text_hero={"Travel With Us"}  x={false} /> 
     <CardTravel/>
   
   
    </div>
  )
}

export default TravelWithUs