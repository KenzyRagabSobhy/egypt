import trend1 from '../../assets/img/pr.jpeg'
import trend2 from '../../assets/img/si.jpeg'
import trend3 from '../../assets/img/nile.jpg'
import Ellipse1 from '../../assets/img/Ellipse3.png'
import calender from '../../assets/img/calender.svg'
import user from '../../assets/img/user-avatar.svg'
import stars from '../../assets/img/stars.png'
import './TrendingCard.css'

const TrendingCard = () => {
    const trenCard=[
        {img:trend1,Ellipse:Ellipse1,icon:calender,date:"8 days",icon2:user,date2:"120 People going",title:"Pyramids",star:stars,text:"One of the Seven Wonders of the Ancient World. Explore the Great Pyramid of Khufu, the Sphinx, and the Pyramid of Khafre, all standing as testaments to Egypt’s rich history. Capture unforgettable moments as you ride a camel across the desert, marveling at the grandeur of these ancient structures."},
        {img:trend2,Ellipse:Ellipse1,icon:calender,date:"8 days",icon2:user,date2:"100 People going",title:"Siwa Oasis",star:stars,text:"A hidden gem surrounded by golden dunes and crystal-clear springs. Relax in the healing waters of Cleopatra’s Bath and explore the ancient Temple of the Oracle, where Alexander the Great once sought wisdom. Experience the magic of a desert safari, watching the sunset over the vast sand dunes under a star-lit sky."},
        {img:trend3,Ellipse:Ellipse1,icon:calender,date:"8 days",icon2:user,date2:"300 People going",title:"Cairo",star:stars,text:"A city where ancient wonders and modern life blend seamlessly. Wander through the historic streets of Islamic Cairo, visit the Egyptian Museum to see King Tut’s treasures, and shop at the bustling Khan El Khalili Bazaar. Whether you're savoring traditional Egyptian cuisine or enjoying a scenic Nile cruise, Cairo promises an unforgettable experience."},
       
    ]

  return (
    <div className='parenttren'>
        {trenCard.map((e,i)=>{
            return(
               
                 <div   key={i}  className='bigtren'>
                    <div className='tren1'>
                      <img src={e.img} alt="" id="img1" /> 
                       <img src={e.Ellipse} alt="" className='ellips'/> 
                    </div>
                 
                   <div className='tren2-3'>
                 <div className='tren2'>
                    <div className='top1'>
                    <img src={e.icon} alt="icon" />
                    <p>{e.date}</p>
                    </div> 
                    
                    
                    <div className='top2'>
                    <img src={e.icon2} alt="icon" />
                      <p>{e.date2}</p>
                     
                    </div>
                    </div>
 
                    <div className='tren3'>
                      <p>{e.title}</p>
                      <img src={e.star} alt="star" />
                    </div>
                    
                    <div>                            
                      <p className='texttren'>{e.text}</p>
                    </div> 
                 </div>
               </div>
                    )
        })

        }
        
    </div>)
  
}

export default TrendingCard