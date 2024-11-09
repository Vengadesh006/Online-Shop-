
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';


export const Moblie = () => {
  useEffect(() =>{
    AOS.init({});
  }, [])

  const moblieCard = [{
    image: 'mobile/m15.jpg',
    title: 'OnePlus Nord CE 3 Lite 5G (Pastel Lime, 8GB RAM, 128GB Storage)',
    prize: '-10% ₹17,999 ',
    content: 'prime',
    day: 'FREE delivery Sun, 10 Mar',
    
  },
  {
    image: 'mobile/m1.jpg',
    title: 'Redmi 12 5G Jade Black 6GB RAM 128GB ROM',
    prize: '-10% ₹17,999 ',
    content: 'prime',
    day: 'FREE delivery wen, 10 Mar',
    
  },
  {
    image: 'mobile/m16.jpg',
    title: 'Redmi Nord CE 3 Lite 5G (Chromatic Gray, 8GB RAM, 256GB Storage)',
    prize: '-10% ₹17,999 ',
    content: 'prime',
    day: 'FREE delivery Thus, 10 Mar',
    
  },
  {
    image: 'mobile/m7.jpg',
    title : 'Poco-m3-pro (Chromatic Gray, 8GB RAM, 256GB Storage)',
    prize: '-10% ₹17,999 ',
    content: 'prime',
    day: 'FREE delivery Sun, 10 Mar',
    
  },
  {
    image: 'mobile/m12.jpg',
    title: 'Oppo-F24-Pro 5G (Chromatic Gray, 8GB RAM, 256GB Storage)',
    prize: '-10% ₹17,999 ',
    content: 'prime',
    day: 'FREE delivery Sun, 10 Mar',
    
  },
  {
    image: 'mobile/m6.jpg',
    title: 'Oppo-F24-Pro 5G (Chromatic Gray, 8GB RAM, 256GB Storage)',
    prize: '-10% ₹17,999 ',
    content: 'prime',
    day: 'FREE delivery Sat, 10 Mar',
    
  },
  {
    image: 'mobile/m11.jpg',
    title: 'Redmi 13(Chromatic Gray, 8GB RAM, 256GB Storage)',
    prize: '-10% ₹17,999 ',
    content: 'prime',
    day: 'FREE delivery mon, 10 Mar',
    
  }]


  return (
    <>
    
      <div className="image-border"> </div>
      <div className="content">
        {moblieCard.map((card, index) => {
          return <div key={index}>
            <div className="card mx-5 shadow p-3 mb-5 bg-body-tertiary rounded"  data-aos="zoom-in" data-aos-duration="2000" style={{maxWidth : '890px'}} > 
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={card.image}classs className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{card.title} </h5>
                    <div className="card-text ">
                      <p className="card-text star p-2 " style={{fontSize : '1.5em' , fontWeight : 'bold'} }>
                        <span> <i className="bi bi-star"></i> </span>
                        <span> <i className="bi bi-star"></i> </span>
                        <span> <i className="bi bi-star"></i> </span>
                        <span> <i className="bi bi-star"></i> </span>
                        <span> <i className="bi bi-star"></i> </span>
                      </p>
                    </div>
                    <p>
                      <span className="big" style={{fontSize : '1.3em' , fontWeight : '600'}}>{card.prize} 
                      <span style={{textDecoration : ' lineThrough'}}> M.R.P.: ₹ 19,999.00 </span>
                    </span>
                    </p>
                      <h4 className='mx-2' ><span style={{fontWeight : 'bold',color : 'black' , fontSize : '1.2em'}}>
                         <i className="bi bi-check2"></i></span>  <span style={{color : 'aqua'}}> Prime </span></h4>
                  
                    <p style={{fontSize : '1.3em', marginLeft : '10px'}} >{card.day} </p>
                    <button type="button" className="btn" style={{backgroundColor : 'red' , color : 'white'}}>But Now </button>
                  </div>
                </div>
              </div>
            </div>


          </div>
        })}

      </div>

    </>
  )
}
