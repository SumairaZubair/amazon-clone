import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "../heroSection/heroSection.css"; // Ensure to import your CSS file
import Boxes from "./boxes";
import FooterSection from "../footer/footerSection";
const MyComponent = () => {


  const goToHome = () => {
    window.location.href = '/';
  };


  const items = [
    <div className="hero-image">
      <img src="/images/hero1.jpg" alt="Image 1" />
    </div>,
    <div className="hero-image">
      <img src="/images/hero2.jpg" alt="Image 2" />
    </div>,
    <div className="hero-image">
      <img src="/images/hero3.jpg" alt="Image 3" />
    </div>,
    <div className="hero-image">
      <img src="/images/hero4.jpg" alt="Image 4" />
    </div>,
  ];


  return (
    <div className="main">
      <AliceCarousel
        autoPlay
        autoPlayInterval={3000}
        infinite
        disableButtonsControls
        disableDotsControls
        items={items}
      />
      <div className="boxes-div">
<div className="padding-div">

     <Boxes/>
</div>
    
    {/* <div className="footer-div">
    <FooterSection back={goToHome}/>
    </div> */}

      </div>
    </div>
  );
};

export default MyComponent;
