import React from 'react'
import logo from '/src/assets/logo.avif'
import './navbar.css' 
import dinein from '/src/assets/dinein.avif'
import delivery from '/src/assets/delivery.webp'
const Navbar1 = () => {
  return (
  <div>
      <nav className="navbar navbar-expand-lg bg-body">
        <div className="container ">
          <a className="navbar-brand" href="#">
            <img src={logo} alt={"logo"} height={30} />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0  ">
              <div className="input-group mb-3 shadow-sm">
          <button className="btn btn-outline-white dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i className="bi bi-geo-alt text-danger"></i>Ahmedabad</button>
          <ul className="dropdown-menu">
            {/* <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Separated link</a></li> */}
          </ul>
          <input type="text" className="form-control shadow-none" aria-label="Text input with dropdown button" placeholder="Search for restaurant, cuision or dish"/>
        </div>
          </ul>
        <button type="button" className="loginbtn" data-bs-toggle="button">Log in</button>
        <button type="button" className="signinbtn" data-bs-toggle="button">Sign in</button>
        </div>
      </div>
      </nav>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">Home</li>
            <li className="breadcrumb-item">India</li>
            <li className="breadcrumb-item" id="textcity">Ahmedabad Restaurants</li>
          </ol>
        </nav>
        <div class="containern  ">
                            <a class="navbar-brand d-flex" href="#">
                                <div className='dining '>
                                <img src={dinein} alt="dinein" width={40} height={40} />
                                </div>
                               <p className='my-3 mx-3'> Dining Out</p> 
                            </a>
                            <a class="navbar-brand d-flex" href="#">
                                <div className='delivery'>
                                <img src={delivery} alt="delivery" width={40} height={40} />
                                </div>
                                <p className='my-3 mx-3'> Delivery</p>  
                            </a>
                        </div>
      
  </div>
  )
}

export default Navbar1
