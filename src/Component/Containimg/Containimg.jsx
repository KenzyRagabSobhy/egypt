import pc5 from '../../assets/img/siwa.jpg'
import pc6 from '../../assets/img/cairo.jpg'
import './Containimg.css'

const Containimg = () => {
    const images =[{img:pc5,text:"Promotion",title:"Explore Nature"},
    {img:pc6,text:"Promotion",title:"Explore Cities"}]  
  return (
    <div>

<div className='ServicesImg'>
    {images.map((e,i)=>{
return(
  <div key={i} className='parentImage'  >
   
   <img src={e.img} alt=""/>
   <div className='text'>
    <h6>{e.text}</h6>
    <h1>{e.title}</h1>
 </div> 
</div>
)
})}
    </div>
   
    </div>
  )
}

export default Containimg