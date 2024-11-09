import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 


export const Fashion1 = () => {
  useEffect(() =>{
    AOS.init({});
  }, [])

  return (

    <>
    <div className="size"></div>
    <div className="image-items"> </div>
      <div className="container text-center">
        <div className="row">
          <div className="col" >
            <div className="card shadow p-3 mb-5 bg-body-tertiary rounded" style={{ width: '18rem' }}>
              <img src="fashion/ethnic.jpg" className="card-img-top" data-aos="zoom-in" data-aos-duration="2000" alt="..." />
              <div className="card-body">
                <h4 className="card-title"> Men's Ethnic Wear</h4>
                <h5 className="card-title">50%-80% OFF </h5>
                <button type="button" className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="col" >
            <div className="card shadow p-3 mb-5 bg-body-tertiary rounded" style={{ width: '18rem' }}>
              <img src="fashion/casual.jpg" className="card-img-top" data-aos="zoom-in" data-aos-duration="2000" alt="..." />
              <div className="card-body">
                <h4 className="card-title"> WHF casual Wear</h4>
                <h5 className="card-title">40%-80% OFF </h5>
                <button type="button" className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow p-3 mb-5 bg-body-tertiary rounded"  style={{ width: '18rem' }}>
              <img src="fashion/activewear.jpg" className="card-img-top" data-aos="zoom-in" data-aos-duration="2000" alt="..." />
              <div className="card-body">
                <h4 className="card-title"> Men's ActiveWear</h4>
                <h5 className="card-title">30%-70% OFF </h5>
                <button type="button" className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="col" >
            <div className="card shadow p-3 mb-5 bg-body-tertiary rounded" style={{ width: '18rem' }}>
              <img src="fashion/activewera1.jpg" className="card-img-top" data-aos="zoom-in" data-aos-duration="2000" alt="..." />
              <div className="card-body">
                <h5 className="card-title"> Momen ActiveWear</h5>
                <h5 className="card-title">40%-60% OFF </h5>
                <button type="button" className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="col" >
            <div className="card shadow p-3 mb-5 bg-body-tertiary rounded" style={{ width: '18rem' }}>
              <img src="fashion/inner.jpg" className="card-img-top" alt="..." data-aos="zoom-in" data-aos-duration="2000" style={{height : '365px'}} />
              <div className="card-body">
                <h5 className="card-title"> Momen ActiveWear</h5>
                <h5 className="card-title">40%-60% OFF </h5>
                <button type="button" className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="col" >
            <div className="card shadow p-3 mb-5 bg-body-tertiary rounded" style={{ width: '18rem' }}>
              <img src="fashion/sportswear.jpg" className="card-img-top" alt="..." data-aos="zoom-in" data-aos-duration="2000" style={{height : '365px'}} />
              <div className="card-body">
                <h4 className="card-title"> Sports Wear </h4>
                <h5 className="card-title">50%-80% OFF </h5>
                <button type="button" className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="col" >
            <div className="card shadow p-3 mb-5 bg-body-tertiary rounded" style={{ width: '18rem' }}>
              <img src="fashion/women.jpg" className="card-img-top" data-aos="zoom-in" data-aos-duration="2000" alt="..." style={{height : '362px'}} />
              <div className="card-body">
                <h4 className="card-title"> Office Wear</h4>
                <h5 className="card-title">40%-60% OFF </h5>
                <button type="button" className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="col" >
            <div className="card shadow p-3 mb-5 bg-body-tertiary rounded" style={{ width: '18rem' }}>
              <img src="fashion/lonuge.jpg" className="card-img-top" data-aos="zoom-in" data-aos-duration="2000" alt="..." style={{height : '362px'}}  />
              <div className="card-body">
                <h4 className="card-title"> Lonuge Wear</h4>
                <h5 className="card-title">50%-80% OFF </h5>
                <button type="button" className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="col" >
            <div className="card shadow p-3 mb-5 bg-body-tertiary rounded" style={{ width: '18rem' }}>
              <img src="fashion/night.jpg" className="card-img-top" data-aos="zoom-in" data-aos-duration="2000" alt="..." style={{height : '362px'}}  />
              <div className="card-body">
                <h4 className="card-title"> NightWear </h4>
                <h5 className="card-title">50%-80% OFF </h5>
                <button type="button" className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="col" >
            <div className="card shadow p-3 mb-5 bg-body-tertiary rounded" style={{ width: '18rem' }}>
              <img src="fashion/menCasualWear.jpg" className="card-img-top" data-aos="zoom-in" data-aos-duration="2000" alt="..." style={{height : '339px'}} />
              <div className="card-body">
                <h4 className="card-title"> Men's Casual Wear</h4>
                <h5 className="card-title">50%-80% OFF </h5>
                <button type="button" className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="col" >
            <div className="card shadow p-3 mb-5 bg-body-tertiary rounded" style={{ width: '18rem' }}>
              <img src="fashion/beaute.jpg" className="card-img-top" data-aos="zoom-in" data-aos-duration="2000" alt="..." style={{height : '362px'}}  />
              <div className="card-body">
                <h4 className="card-title"> beaute kits </h4>
                <h5 className="card-title">50%-80% OFF </h5>
                <button type="button" className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="col" >
            <div className="card shadow p-3 mb-5 bg-body-tertiary rounded" style={{ width: '18rem' }}>
              <img src="fashion/kids.jpg" className="card-img-top" data-aos="zoom-in" data-aos-duration="2000" alt="..." style={{height : '362px'}} />
              <div className="card-body">
                <h4 className="card-title"> kids Wear</h4>
                <h5 className="card-title">50%-80% OFF </h5>
                <button type="button" className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="col" >
            <div className="card shadow p-3 mb-5 bg-body-tertiary rounded" style={{ width: '18rem' }}>
              <img src="fashion/momenWear.jpg" className="card-img-top" data-aos="zoom-in" data-aos-duration="2000" alt="..." style={{height : '255px'}} />
              <div className="card-body">
                <h4 className="card-title"> Momen Wear </h4>
                <h5 className="card-title">50%-80% OFF </h5>
                <button type="button" className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="col" >
            <div className="card shadow p-3 mb-5 bg-body-tertiary rounded" style={{ width: '18rem' }}>
              <img src="fashion/jewelry.jpg" className="card-img-top" data-aos="zoom-in" data-aos-duration="2000" alt="..." />
              <div className="card-body">
                <h4 className="card-title"> Jewelry's </h4>
                <h5 className="card-title">50%-80% OFF </h5>
                <button type="button" className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="col" >
            <div className="card shadow p-3 mb-5 bg-body-tertiary rounded"  style={{ width: '18rem' }}>
              <img src="fashion/Watches.jpg" className="card-img-top" data-aos="zoom-in" data-aos-duration="2000" alt="..." />
              <div className="card-body">
                <h4 className="card-title"> Watches</h4>
                <h5 className="card-title">50%-80% OFF </h5>
                <button type="button" className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="col" >
            <div className="card shadow p-3 mb-5 bg-body-tertiary rounded" style={{ width: '18rem' }}>
              <img src="fashion/shoe.jpg" className="card-img-top" data-aos="zoom-in" data-aos-duration="2000" alt="..." />
              <div className="card-body">
                <h4 className="card-title">Shoe </h4>
                <h5 className="card-title">50%-80% OFF </h5>
                <button type="button" className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}
