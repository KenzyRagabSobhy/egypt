import pc1 from '../../assets/img/tour-guide 1.png'
import pc2 from '../../assets/img/travelling 1.png'
import pc3 from '../../assets/img/medical-team 1 (1).png'
import pc4 from '../../assets/img/hands 1 (1).png'
import Title from '../Title/Title'
import './Best Services.css'




const BestServices = () => {
    let contintcard=[{img:pc1,titel:"Guided Tours",text:"Explore Egypt’s iconic landmarks, from the Pyramids of Giza to the temples of Luxor and Aswan, with our expert-guided tours."},
    {img:pc2,titel:"Best Flights Options",text:"Traveling to and within Egypt, ensuring affordability and seamless bookings. Whether you're flying into Cairo, Sharm El-Sheikh, or Hurghada."},
    {img:pc3,titel:"Religious Tours",text:"Experience spiritually enriching pilgrimages to Egypt’s most sacred sites, including Al-Hussein Mosque and Saint Catherine’s Monastery."},
    {img:pc4,titel:"Medical insurance",text:"Travel confidently with our medical insurance, covering emergencies, hospital stays, and consultations across Egypt."}]

  
  return (
    <div className="BestServices">
      <Title h1_t="CATEGORY" h6_t="We Offer Best Services"/>

    <div className="Services">
    {contintcard.map((e,i)=>{return (
        <div key={i} className='s'>
            <img src={e.img} alt="" />
            <h1>{e.titel}</h1>
            <p>{e.text}</p>
        </div>)})}
    </div>

   

</div>
  )
   
  

}
  

export default BestServices