import us1 from '../../../public/assets/img/hotel1.jpg'
import us2 from '../../../public/assets/img/hotel2.jpg'
import us3 from '../../../public/assets/img/hotel3.jpg'
import us4 from '../../../public/assets/img/hotel4.jpg'
import us5 from '../../../public/assets/img/hotel5.jpg'
import us6 from '../../../public/assets/img/hotel6.jpg'
import star1 from '../../../public/assets/img/star1.svg'
import './CardTravel.css'
const CardTravel = () => {
    const CardTravel=[
        {img:us1,p1:"27, September 2025",p2:"30+ People",title:"TOLIP Golden Plaza",text:"TOLIP Hotel Golden Plaza gives its location character and elegance. Situated in the heart of Heliopolis, the biggest commercial area in Cairo, the hotel is not more than five minutes away from all the facilities that will satisfy your shopping, fast dining and touristic desires.",num1:"3000 $",icon:star1,num2:"5.0"},
        {img:us2,p1:"13, October 2025",p2:"120+ People",title:"New Comfort Inn Giza",text:"Located in Cairo, 1.6 km from Giza Pyramids, Comfort Inn Giza provides accommodation with free bikes, free private parking, a terrace and a bar. This 3-star hostel offers a tour desk. The accommodation offers a 24-hour front desk, airport transfers, a concierge service and free WiFi. The hostel will provide guests with air-conditioned rooms with a desk, a kettle, a safety deposit box, a flat-screen TV and a private bathroom with a shower.",num1:"1290 $",icon:star1,num2:"4.9"}, 
        {img:us3,p1:"2, November 2025",p2:"139+ People",title:"PANORAMA NAAMA HEIGHTS",text:"Panorama’s rooms come with a minibar and a flat-screen satellite TV. Each is decorated in warm colours and offers a bathroom stocked with toiletries. Heating and tiled floors are standard in all rooms. Massage treatments are offered in the swimming pool area and the Turkish Bath is available outside the property upon request. There is a playground for younger guests.",num1:"3000 $",icon:star1,num2:"5.0"},
        {img:us4,p1:"14, December 2022",p2:"50+ People",title:"Domina Coral Bay",text:"2 kilometers of private beach and pristine coral reefs, 1295 hotel rooms, kids club, 105 exclusive villas, 3000 square meters of spa, diving center with private port, Aladin casino, an exclusive beach club, 3 buffet restaurants, and 9 a la cart restaurants including 4 beach restaurants with unlimited entertainment shows and animation activities.",num1:"3000 $",icon:star1,num2:"4.0"},
        {img:us5,p1:"20, September 2022",p2:"80+ People",title:"AIFU Hotel El Montazah Alexandria",text:"Offering rooms with views of the Mediterranean Sea and El Montazah Royal Gardens, Aifu Resort is located in Alexandria. The resort has 2 restaurants and an outdoor pool.",num1:"3000 $",icon:star1,num2:"5.0"},
        {img:us6,p1:"27, August 2022",p2:"100+ People",title:"Sindbad Club",text:"Sindbad Club makes a splash just outside the centre of Hurghada. It comes with its own waterpark and a pool scene that’s geared up for families. This hotel’s perched on the Red Sea coast. You’ve got a collection of restaurants, bars and pools to dip into, as well as a spa that keeps the do not disturb sign firmly in place.",num1:"3000 $",icon:star1,num2:"5.0"}]
        
  return (
    <div  className='PCardTravel'>
      {CardTravel.map((element,i)=>{
        return(
          <div  key={i} className='CardTravel'>
         <img src={element.img} alt="" />
         <div className='tr1'>
         <p>{element.p1}</p>
         <p>{element.p2}</p>
         </div>
         
         <h1>{element.title}</h1>
         <p id="trvelText">{element.text}</p>

         <div className='star1'>
         <p>{element.num1}</p> 
         <img src={star1} alt="" />
         <p>{element.num2}</p> 
         
         </div>
        
                 </div>
        )
      })

      }

    
    </div>
  )
}

export default CardTravel