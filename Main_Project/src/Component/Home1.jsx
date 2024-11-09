"use client"
import React, { useEffect } from 'react'
import image1 from '../assets/img4.jpg'
// import image2 from '../assets/img2.jpg'
// import image3 from '../assets/img1.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css'; 





export const Home1 = () => {
  useEffect(() =>{
    AOS.init({});
  }, [])

  return (
    <>
      <div className="silder-data">
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel" >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img src={image1} className="d-block w-100" alt="..." style={{ height: '99vh', borderRadius: '10px' }} />

            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src={image1} className="d-block w-100 p-1" alt="..." style={{ height: '99vh', borderRadius: '10px' }} />
            </div>
            <div className="carousel-item">
              <img src={image1} className="d-block w-100 p-1" alt="..." style={{ height: '99vh', borderRadius: '10px' }} />
             
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="main-content">
        <marquee behavior="  " direction="right">
          <h1 className='content p-2'>...<span style={{ color: 'red' }}>O</span>nline <span style={{ color: 'red' }}>S</span>hopping ...</h1>
        </marquee>
        <h5> Whoever said money can’t buy happiness simply didn’t know where to go shopping. </h5>
      </div>
      {/* card items */}
      <div className="container text-center media">
        <div className="row " >
          {/*  data-aos="zoom-in" data-aos-duration="3000" */}
          <div className="col"> 
          
            {/* card 1  */}
            <div className="card shadow p-3 mb-5 bg-body-tertiary rounded" style={{ width: '18rem' }}>
              <span className='heart'><i className="bi bi-heart "></i>  </span>
              <img src="image/white.jpg" className="card-img-top" data-aos="zoom-in" data-aos-duration="3000"    alt="..." style={{position : 'relative'}} />
              <div className="card-body">
                <h5 className="card-title"> up to 30% sale </h5>
                <p className="card-text star m-1 ">
                  <span> <i className="bi bi-star"></i> </span>
                  <span> <i className="bi bi-star"></i> </span>
                  <span> <i className="bi bi-star"></i> </span>
                  <span> <i className="bi bi-star"></i> </span>
                  <span> <i className="bi bi-star"></i> </span>
                </p>
                <h4 className="card-text"> ₹ 999 </h4>
                <button type="button" className="btn btn-danger m-1">Shop Now</button>
              </div>
            </div>
          </div>
          {/* card -2  */}
          <div className="col">
            <div className="card shadow p-3 mb-5 bg-body-tertiary rounded" style={{ width: '18rem' }}>
              <span className='heart'><i className="bi bi-heart "></i>  </span>
              <img src="image/cap1.jpg" className="card-img-top" data-aos="zoom-in" data-aos-duration="3000"    alt="..." />
              <div className="card-body">
                <h5 className="card-title"> up to 30% sale </h5>
                <p className="card-text star m-1 ">
                  <span> <i className="bi bi-star"></i> </span>
                  <span> <i className="bi bi-star"></i> </span>
                  <span> <i className="bi bi-star"></i> </span>
                  <span> <i className="bi bi-star"></i> </span>
                  <span> <i className="bi bi-star"></i> </span>
                </p>
                <h4 className="card-text"> ₹ 499 </h4>
                <button type="button" className="btn btn-danger m-1">Shop Now</button>
              </div>
            </div>

          </div>
          {/* card 3  */}
          <div className="col">
            <div className="card shadow p-3 mb-5 bg-body-tertiary rounded" style={{ width: '18rem' }}>
              <span className='heart'><i className="bi bi-heart "></i>  </span>
              <img src="image/case.jpg" className="card-img-top" data-aos="zoom-in" data-aos-duration="3000"    alt="..." style={{ height: '260px', padding: '10px' }} />
              <div className="card-body">
                <h5 className="card-title"> up to 30% sale </h5>
                <p className="card-text star m-1 ">
                  <span> <i className="bi bi-star"></i> </span>
                  <span> <i className="bi bi-star"></i> </span>
                  <span> <i className="bi bi-star"></i> </span>
                  <span> <i className="bi bi-star"></i> </span>
                  <span> <i className="bi bi-star"></i> </span>
                </p>
                <h4 className="card-text"> ₹ 199 </h4>
                <button type="button" className="btn btn-danger m-1">Shop Now</button>
              </div>
            </div>
          </div>
          {/* card 4 */}
          <div className="col">
            <div className="card shadow p-3 mb-5 bg-body-tertiary rounded" style={{ width: '18rem' }}>
              <span className='heart'><i className="bi bi-heart "></i>  </span>
              <img src="image/men2.jpg" className="card-img-top"  data-aos="zoom-in" data-aos-duration="3000"  alt="..." />
              <div className="card-body">
                <h5 className="card-title"> up to 30% sale </h5>
                <p className="card-text star m-1 ">
                  <span> <i className="bi bi-star"></i> </span>
                  <span> <i className="bi bi-star"></i> </span>
                  <span> <i className="bi bi-star"></i> </span>
                  <span> <i className="bi bi-star"></i> </span>
                  <span> <i className="bi bi-star"></i> </span>
                </p>
                <h4 className="card-text"> ₹ 399 </h4>
                <button type="button" className="btn btn-danger m-1">Shop Now</button>
              </div>
            </div>
          </div>
          {/* card 5 */}
          <div className="col">
            <div className="card shadow p-3 mb-5 bg-body-tertiary rounded" style={{ width: '18rem' }}>
              <span className='heart'><i className="bi bi-heart "></i>  </span>
              <img src="image/bag.jpg" className="card-img-top"data-aos="zoom-in" data-aos-duration="3000" alt="..." />
              <div className="card-body">
                <h5 className="card-title"> up to 30% sale </h5>
                <p className="card-text star m-1 ">
                  <span> <i className="bi bi-star"></i> </span>
                  <span> <i className="bi bi-star"></i> </span>
                  <span> <i className="bi bi-star"></i> </span>
                  <span> <i className="bi bi-star"></i> </span>
                  <span> <i className="bi bi-star"></i> </span>
                </p>
                <h4 className="card-text"> ₹ 199 </h4>
                <button type="button" className="btn btn-danger m-1">Shop Now</button>
              </div>
            </div>
          </div>
          {/* card 6 */}
          <div className="col">
            <div className="card shadow p-3 mb-5 bg-body-tertiary rounded" style={{ width: '18rem' }}>
              <span className='heart'><i className="bi bi-heart "></i>  </span>
              <img src="image/j2.jpg" className="card-img-top" data-aos="zoom-in" data-aos-duration="3000"   alt="..." style={{ height: '260px', padding: '10px' }} />
              <div className="card-body">
                <h5 className="card-title"> up to 30% sale </h5>
                <p className="card-text star m-1 ">
                  <span> <i className="bi bi-star"></i> </span>
                  <span> <i className="bi bi-star"></i> </span>
                  <span> <i className="bi bi-star"></i> </span>
                  <span> <i className="bi bi-star"></i> </span>
                  <span> <i className="bi bi-star"></i> </span>
                </p>
                <h4 className="card-text"> ₹ 99 </h4>
                <button type="button" className="btn btn-danger m-1">Shop Now</button>
              </div>
            </div>
          </div>
          {/* card 7 */}
          <div className="col">
            <div className="card shadow p-3 mb-5 bg-body-tertiary rounded" style={{ width: '18rem' }}>
              <span className='heart'><i className="bi bi-heart "></i>  </span>
              <img src="image/men5.jpg" className="card-img-top" data-aos="zoom-in" data-aos-duration="3000" alt="..." style={{ height: '260px' }} />
              <div className="card-body">
                <h5 className="card-title"> up to 30% sale </h5>
                <p className="card-text star m-1 ">
                  <span> <i className="bi bi-star"></i> </span>
                  <span> <i className="bi bi-star"></i> </span>
                  <span> <i className="bi bi-star"></i> </span>
                  <span> <i className="bi bi-star"></i> </span>
                  <span> <i className="bi bi-star"></i> </span>
                </p>
                <h4 className="card-text"> ₹ 199 </h4>
                <button type="button" className="btn btn-danger m-1">Shop Now</button>
              </div>
            </div>
          </div>
          {/* card 7 */}
          <div className="col">
            <div className="card shadow p-3 mb-5 bg-body-tertiary rounded" style={{ width: '18rem' }}>
              <span className='heart'><i className="bi bi-heart "></i>  </span>
              <img src="image/shoe1.jpg" className="card-img-top"  data-aos="zoom-in" data-aos-duration="3000"   alt="..." />
              <div className="card-body">
                <h5 className="card-title"> up to 30% sale </h5>
                <p className="card-text star m-1 ">
                  <span> <i className="bi bi-star"></i> </span>
                  <span> <i className="bi bi-star"></i> </span>
                  <span> <i className="bi bi-star"></i> </span>
                  <span> <i className="bi bi-star"></i> </span>
                  <span> <i className="bi bi-star"></i> </span>
                </p>
                <h4 className="card-text"> ₹ 299 </h4>
                <button type="button" className="btn btn-danger m-1">Shop Now</button>
              </div>
            </div>
          </div>
          {/* card 8 */}
          <div className="col">
            <div className="card shadow p-3 mb-5 bg-body-tertiary rounded" style={{ width: '18rem' }}>
              <span className='heart'><i className="bi bi-heart "></i>  </span>
              <img src="image/bag2.jpg" className="card-img-top" data-aos="zoom-in" data-aos-duration="3000"    alt="..." style={{ height: '405px' }} />
              <div className="card-body">
                <h5 className="card-title"> up to 30% sale </h5>
                <p className="card-text star m-1 ">
                  <span> <i className="bi bi-star"></i> </span>
                  <span> <i className="bi bi-star"></i> </span>
                  <span> <i className="bi bi-star"></i> </span>
                  <span> <i className="bi bi-star"></i> </span>
                  <span> <i className="bi bi-star"></i> </span>
                </p>
                <h4 className="card-text"> ₹ 399 </h4>
                <button type="button" className="btn btn-danger m-1">Shop Now</button>
              </div>
            </div>
          </div>
          {/* card 9 */}
          <div className="col">
            <div className="card shadow p-3 mb-5 bg-body-tertiary rounded" style={{ width: '18rem' }}>
              <span className='heart'><i className="bi bi-heart "></i>  </span>
              <img src="image/col7.jpg" className="card-img-top"  data-aos="zoom-in" data-aos-duration="3000"   alt="..." />
              <div className="card-body">
                <h5 className="card-title"> up to 30% sale </h5>
                <p className="card-text star m-1 ">
                  <span> <i className="bi bi-star"></i> </span>
                  <span> <i className="bi bi-star"></i> </span>
                  <span> <i className="bi bi-star"></i> </span>
                  <span> <i className="bi bi-star"></i> </span>
                  <span> <i className="bi bi-star"></i> </span>
                </p>
                <h4 className="card-text"> ₹ 1,999 </h4>
                <button type="button" className="btn btn-danger m-1">Shop Now</button>
              </div>
            </div>
          </div>
          {/* card 10 */}
          <div className="col">
            <div className="card shadow p-3 mb-5 bg-body-tertiary rounded" style={{ width: '18rem' }}>
              <span className='heart'><i className="bi bi-heart "></i>  </span>
              <img src="image/col5.jpg" className="card-img-top" data-aos="zoom-in" data-aos-duration="3000"    alt="..." />
              <div className="card-body">
                <h5 className="card-title"> up to 30% sale </h5>
                <p className="card-text star m-1 ">
                  <span> <i className="bi bi-star"></i> </span>
                  <span> <i className="bi bi-star"></i> </span>
                  <span> <i className="bi bi-star"></i> </span>
                  <span> <i className="bi bi-star"></i> </span>
                  <span> <i className="bi bi-star"></i> </span>
                </p>
                <h4 className="card-text"> ₹ 999 </h4>
                <button type="button" className="btn btn-danger m-1">Shop Now</button>
              </div>
            </div>
          </div>
          {/* card 11 */}
          <div className="col">
            <div className="card shadow p-3 mb-5 bg-body-tertiary rounded" style={{ width: '18rem' }}>
              <span className='heart'><i className="bi bi-heart "></i>  </span>
              <img src="image/col6.jpg" className="card-img-top" data-aos="zoom-in" data-aos-duration="3000"   alt="..." />
              <div className="card-body">
                <h5 className="card-title"> up to 30% sale </h5>
                <p className="card-text star m-1 ">
                  <span> <i className="bi bi-star"></i> </span>
                  <span> <i className="bi bi-star"></i> </span>
                  <span> <i className="bi bi-star"></i> </span>
                  <span> <i className="bi bi-star"></i> </span>
                  <span> <i className="bi bi-star"></i> </span>
                </p>
                <h4 className="card-text"> ₹ 2,999 </h4>
                <button type="button" className="btn btn-danger m-1">Shop Now</button>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="fooder-content">
        <div className="card-group m-5">
          <div className="card">
            <img src="https://media.mcafeeassets.com/content/dam/npcld/ecommerce/en-us/icons/icon-mav-2021-30-day-money-back-guarantee.svg" className="card-img-top img" alt="..." />
            <div className="card-body p-3">
              <h5 className="card-title"> 30-day money back guarantee</h5>
              <p className="card-text">If you’re not completely satisfied, we’ll be more than happy to give you a prompt and courteous refund</p>

            </div>
          </div>
          <div className="card">
            <img src="https://media.mcafeeassets.com/content/dam/npcld/ecommerce/en-us/icons/icon-mtp-2021-24-7-online-security-experts.svg" className="card-img-top img" alt="..." />
            <div className="card-body p-3">
              <h5 className="card-title">Security Experts & Online Support</h5>
              <p className="card-text">Get assistance and peace of mind from our dedicated security team and support knowledgebase.</p>

            </div>
          </div>
          <div className="card">
            <img src="https://media.mcafeeassets.com/content/dam/npcld/ecommerce/en-us/refresh_imgs/100icon.png" className="card-img-top img" alt="..." />
            <div className="card-body p-3">
              <h5 className="card-title">100% guaranteed</h5>
              <p className="card-text">We pledge to remove viruses on your devices or give you your money back, guaranteed.</p>

            </div>
          </div>
        </div>
      </div>

    </>
  )
}