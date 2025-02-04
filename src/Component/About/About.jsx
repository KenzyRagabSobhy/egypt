import NavBar from "../NavBar/NavBar"
import Hero from "../Hero/Hero"
import logo from '../../assets/img/logo.png'
import bc from '../../assets/img/abou.jpg'
import About1 from '../../assets/img/1-about.png'
import './About.css'
import Promotion from "../Promotion/Promotion"
import Girl from "../Girl/Girl"
import About2 from '../../assets/img/about-us-img-2_1.png'
const About = () => {
  return (
    <div>
        <NavBar logo={logo} menu={[{path:"/",title:"Home",},
                              {path:"/About",title:"About"},
                              {path:"/Service",title:"Service",},
                              {path:"/Contact",title:"Contact"}]}/>  
          <Hero bc={bc}  text_hero= "About Us" x={false}/> 
         <Promotion smalltitle="Promotion" title="We Provide You Best Diving Tours" text="Discover Egypt’s mesmerizing underwater world with our top-rated diving tours in the Red Sea. Explore vibrant coral reefs, swim alongside exotic marine life, and dive into crystal-clear waters in destinations like Sharm El-Sheikh, Hurghada, and Marsa Alam. Whether you're a beginner or an experienced diver, our expert guides ensure a safe and unforgettable diving adventure. Experience the thrill of wreck diving, night dives, and encounters with dolphins, turtles, and colorful fish in one of the world's best diving spots!"
         About1={About1} revers={false}/>
          <Girl/>
          <Promotion smalltitle="Trend" title="Our Popular Tour Plans" text="Embark on an unforgettable journey to the Red Sea, home to some of the world’s most stunning beaches and vibrant marine life. Enjoy thrilling snorkeling and diving excursions in Sharm El-Sheikh, Hurghada, and Marsa Alam, where crystal-clear waters and colorful coral reefs await. Relax on pristine sandy shores, take a luxurious yacht trip, or experience the magic of a desert safari by the sea. Adventure seekers can explore famous wreck diving sites and swim alongside dolphins, turtles, and exotic fish. Whether you seek relaxation or adrenaline-pumping activities, our Red Sea tour plans offer something for every traveler!"
          About1={About2} revers={true}/>  
    </div>
  )
}

export default About