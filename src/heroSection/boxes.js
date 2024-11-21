import React, { useEffect, useState } from 'react'
import '../heroSection/boxes.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const boxesItems=[
    {
        id: 1,
        head: "Gaming Accessories",
        images: [
            { src: "/images/box-1-image-1.jpg", alt: "Product 1", text: "Headset" },
            { src: "/images/box-1-image-2.jpg", alt: "Product 2", text: "Keyboard" },
            { src: "/images/box-1-image-3.jpg", alt: "Product 3", text: "Computer mice" },
            { src: "/images/box-1-image-4.jpg", alt: "Product 4", text: "Chairs" }
        ],
        para: "See More"
    },
    {
        id: 2,
        head: "Shop for your home essentials",
        images: [
            { src: "/images/box-2-image-1.jpg", alt: "Product 1", text: "Cleaning Tools" },
            { src: "/images/box-2-image-2.jpg", alt: "Product 2", text: "Home Storage" },
            { src: "/images/box-2-image-3.jpg", alt: "Product 3", text: "Home Decor" },
            { src: "/images/box-2-image-4.jpg", alt: "Product 4", text: "Bedding" }
        ],
        para: "Discover more in Home"
    },
    {
        id: 3,
        head: "Shop deals in Fashion",
        images: [
            { src: "/images/box-3-image-1.jpg", alt: "Product 1", text: "Jeans under $50" },
            { src: "/images/box-3-image-2.jpg", alt: "Product 2", text: "Jeans under $50" },
            { src: "/images/box-3-image-3.jpg", alt: "Product 3", text: "Dresses under $30" },
            { src: "/images/box-3-image-4.jpg", alt: "Product 4", text: "Shoes under $30" }
        ],
        para: "See all deals"
    },{
        id:4,
        head:"New home arrivals under $50",
        images: [
            { src: "/images/box-4-image-1.jpg", alt: "Product 1", text:  "Kitchen & dining" },
            { src: "/images/box-4-image-2.jpg", alt: "Product 1", text: "Home improvement" },
            { src: "/images/box-4-image-3.jpg", alt: "Product 1", text: "Décor" },
            { src: "/images/box-4-image-4.jpg", alt: "Product 1", text: "Bedding & bath" }
          ],
          para:"Shop the latest from Home"

    },
    ,{
        id:5,
        head:"Top categories in Kitchen appliances",
        images: [
            { src: "/images/box-5-image-1.jpg", alt: "Product 1", text:  "Cooker" },
            { src: "/images/box-5-image-2.jpg", alt: "Product 1", text: "Coffee" },
            { src: "/images/box-5-image-3.jpg", alt: "Product 1", text: "Pots and Pans" },
            { src: "/images/box-5-image-4.jpg", alt: "Product 1", text: "Kettles" }
          ],
          para:"Explore all products in Kitchen"

    },{
        id:6,
        head:"Refresh your space",
        images: [
            { src: "/images/box-6-image-1.jpg", alt: "Product 1", text:  "Dining" },
            { src: "/images/box-6-image-2.jpg", alt: "Product 1", text: "Home " },
            { src: "/images/box-6-image-3.jpg", alt: "Product 1", text: "Kitchen" },
            { src: "/images/box-6-image-4.jpg", alt: "Product 1", text: "Health and Beauty" }
          ],
          para:"See more"

    },{
        id:7,
        head:"Get your game on",
        images: [
            { src: "/images/box-7-image-1.jpg", alt: "Product 1", },
            
          ],
          para:"Shop gaming"

    },{
        id:8,
        head:"Home décor under $50",
        images: [
            { src: "/images/box-8-image-1.jpg", alt: "Product 1",  },
           
          ],
          para:"Shop now"

    },{
        id:9,
        head:"Toys for all agese",
        images: [
            { src: "/images/box-9-img-1.jpg", alt: "Product 1", text:  "Ride on's" },
            { src: "/images/box-9-img-2.jpg", alt: "Product 1", text: "Buliding & construction " },
            { src: "/images/box-9-img-3.jpg", alt: "Product 1", text: "Dolls & Doll Houses" },
            { src: "/images/box-9-img-4.jpg", alt: "Product 1", text: "Swimming pool" }
          ],
          para:"See more"

    },{
        id:10,
        head:"Wireless Tech",
        images: [
            { src: "/images/box-10-img-1.jpg", alt: "Product 1", text:  "Smartphones" },
            { src: "/images/box-10-img-2.jpg", alt: "Product 1", text: "Watches " },
            { src: "/images/box-10-img-3.jpg", alt: "Product 1", text: "Headphones" },
            { src: "/images/box-10-img-4.jpg", alt: "Product 1", text: "Tablets" }
          ],
          para:"Discover more"

    },{
        id:11,
        head:"Most-loved travel essentials",
        images: [
            { src: "/images/box-11-img-1.jpg", alt: "Product 1", text:  "Bagpacks" },
            { src: "/images/box-11-img-2.jpg", alt: "Product 1", text: "Suitcases " },
            { src: "/images/box-11-img-3.jpg", alt: "Product 1", text: "Accessoires" },
            { src: "/images/box-11-img-4.jpg", alt: "Product 1", text: "Handbags" }
          ],
          para:"Discover more"

    },{
        id:12,
        head:"Gaming merchandise",
        images: [
            { src: "/images/box-12-image-1.jpg", alt: "Product 1", text:  "Apparel" },
            { src: "/images/box-12-image-2.jpg", alt: "Product 1", text: "Hats " },
            { src: "/images/box-12-image-3.jpg", alt: "Product 1", text: "Action figures" },
            { src: "/images/box-12-image-4.jpg", alt: "Product 1", text: "Mug" }
          ],
          para:"See more"

    },
    ,{
        id:13,
        head:"Halloween finds under $10",
        images: [
            { src: "/images/box-13-image-1.jpg", alt: "Product 1", text:  "Candy" },
            { src: "/images/box-13-image-2.jpg", alt: "Product 1", text: "Pumpkin decorating " },
            { src: "/images/box-13-image-3.jpg", alt: "Product 1", text: "Makeup" },
            { src: "/images/box-13-image-4.jpg", alt: "Product 1", text: "Party supplies" }
          ],
          para:"Shop more Halloween"

    },,{
        id:14,
        head:"Most-loved watches",
        images: [
            { src: "/images/box-14-image-1.jpg", alt: "Product 1", text:  "Women" },
            { src: "/images/box-14-image-2.jpg", alt: "Product 1", text: "Mens " },
            { src: "/images/box-14-image-13.jpg", alt: "Product 1", text: "Girls" },
            { src: "/images/box-14-image-14.jpg", alt: "Product 1", text: "Boys" }
          ],
          para:"Discover more"

    },,{
        id:15,
        head:"Have more fun with family",
        images: [
            { src: "/images/box-15-image-1.jpg", alt: "Product 1", text:  "Outdoor play sets" },
            { src: "/images/box-15-image-2.jpg", alt: "Product 1", text: "Learning Toys " },
            { src: "/images/box-15-image-3.jpg", alt: "Product 1", text: "Action figures" },
            { src: "/images/box-15-image-4.jpg", alt: "Product 1", text: "Pretend play toys" }
          ],
          para:"See more"

    },,{
        id:16,
        head:"Explore more in Sports",
        images: [
            { src: "/images/box-16-image-1.jpg", alt: "Product 1", text:  "Cycling" },
            { src: "/images/box-16-image-2.jpg", alt: "Product 1", text: "Running " },
            { src: "/images/box-16-image-3.jpg", alt: "Product 1", text: "Exercise and fitness" },
            { src: "/images/box-16-image-4.jpg", alt: "Product 1", text: "Golf" }
          ],
          para:"Explore more"

    },
    
]

const images = [
    {
        src: "/images/long-box-img-11.jpg",
        alt: "Product 1",
    },
    {
        src: "/images/long-box-img-5.jpg",
        alt: "Product 2",
    },
    {
        src: "/images/long-box-img-7.jpg",
        alt: "Product 3",
    },
    {
        src: "/images/long-box-img-4.jpg",
        alt: "Product 4",
    },
    {
        src: "/images/long-box-img-5.jpg",
        alt: "Product 5",
    },
    {
        src: "/images/long-box-img-11.jpg",
        alt: "Product 6",
    },
    {
        src: "/images/long-box-img-7.jpg",
        alt: "Product 7",
    },
    {
        src: "/images/long-box-img-11.jpg",
        alt: "Product 8",
    },
    {
        src: "/images/long-box-img-4.jpg",
        alt: "Product 8",
    },{
        src: "/images/long-box-img-5.jpg",
        alt: "Product 8",
    },{
        src: "/images/long-box-img-11.jpg",
        alt: "Product 8",
    },{
        src: "/images/long-box-img-4.jpg",
        alt: "Product 8",
    },{
        src: "/images/long-box-img-5.jpg",
        alt: "Product 8",
    },
];

const moreImages = [
    {
        src: "/images/long-box-2-img-1.jpg",
        alt: "Product 1",
    },
    {
        src: "/images/long-box-2-img-2.jpg",
        alt: "Product 2",
    },
    {
        src: "/images/long-box-2-img-3.jpg",
        alt: "Product 3",
    },
    {
        src: "/images/long-box-2-img-4.jpg",
        alt: "Product 4",
    },
    {
        src: "/images/long-box-2-img-5.jpg",
        alt: "Product 5",
    },
    {
        src: "/images/long-box-2-img-6.jpg",
        alt: "Product 6",
    },
    {
        src: "/images/long-box-2-img-7.jpg",
        alt: "Product 7",
    },
    {
        src: "/images/long-box-2-img-8.jpg",
        alt: "Product 8",
    },
    {
        src: "/images/long-box-2-img-9.jpg",
        alt: "Product 8",
    },{
        src: "/images/long-box-2-img-10.jpg",
        alt: "Product 8",
    },{
        src: "/images/long-box-2-img-11.jpg",
        alt: "Product 8",
    },{
        src: "/images/long-box-2-img-12.jpg",
        alt: "Product 8",
    },
];

const extraMoreImages = [
    {
        src: "/images/long-box-3-img-1.jpg",
        alt: "Product 1",
    },
    {
        src: "/images/long-box-3-img-2.jpg",
        alt: "Product 2",
    },
    {
        src: "/images/long-box-3-img-3.jpg",
        alt: "Product 3",
    },
    {
        src: "/images/long-box-3-img-4.jpg",
        alt: "Product 4",
    },
    {
        src: "/images/long-box-3-img-5.jpg",
        alt: "Product 5",
    },
    {
        src: "/images/long-box-3-img-6.jpg",
        alt: "Product 6",
    },
    {
        src: "/images/long-box-3-img-7.jpg",
        alt: "Product 7",
    },
    {
        src: "/images/long-box-3-img-8.jpg",
        alt: "Product 8",
    },
    {
        src: "/images/long-box-3-img-9.jpg",
        alt: "Product 8",
    },{
        src: "/images/long-box-3-img-10.jpg",
        alt: "Product 8",
    },{
        src: "/images/long-box-3-img-11.jpg",
        alt: "Product 8",
    },{
        src: "/images/long-box-3-img-12.jpg",
        alt: "Product 8",
    },
];


  const Boxes = () => {
    const settings = {
        dots: true, // Enable dots indicator
        infinite: true, // Loop through images
        speed: 500, // Transition speed
        slidesToShow: 4, // Show one image at a time
        slidesToScroll: 1, // Scroll one image at a time
        autoplay: true, // Enable auto-play
        autoplaySpeed: 3000, // Speed for auto-play
        arrows: false, // Show navigation arrows
        pauseOnHover: true, // Pause on hover
        
    
    };
     const extrasettings = {
        dots: true, // Enable dots indicator
        infinite: true, // Loop through images
        speed: 500, // Transition speed
        slidesToShow: 4, // Show one image at a time
        slidesToScroll: 1, // Scroll one image at a time
        autoplay: true, // Enable auto-play
        autoplaySpeed: 3000, // Speed for auto-play
        arrows: false, // Show navigation arrows
        pauseOnHover: true, // Pause on hover
        
    
    };

    const [showSlider, setShowSlider] = useState(false);

    useEffect(() => {
        // Check if boxesItems length is greater than 7
        if (boxesItems.length > 8) {
            setShowSlider(true);
        } else {
            setShowSlider(false);
        }
    }, [boxesItems.length]);

//     return (
//         <div className="boxes-container">
//             {boxesItems.map((item, index) => (
//                 <div key={index} className="box">
//                     <h2 className='item-head'>{item.head}</h2>
//                     <div className="box-images">
//                         {item.images.map((image, idx) => (
//                             <div key={idx} className={`image-item ${item.id === 7 || item.id === 8 ? 'large-image' : ''}`}>
//                                 <img src={image.src} alt={image.alt} />
//                                 <p>{image.text}</p>
//                             </div>
//                         ))}
//                     </div>
//                     <div className='para-div'>
//                         <p className="box-para">{item.para}</p>
//                     </div>
//                 </div>
//             ))}
            
//             {/* Additional Heading and Paragraph after 4 boxes */}
//              {boxesItems.length === 7 && (
//                 <div className="slider-container">
//                 <h2>Top Picks for Pakistan</h2>
//                 <Slider {...settings}>
//                     {images.map((item, index) => (
//                         <div key={index} className="slider-item">
//                             <img src={item.src} alt={item.alt} className="slider-image" />
//                         </div>
//                     ))}
//                 </Slider>
//             </div>
//             )} 
//         </div>
//     );
// };

// export default Boxes;


return (
    <div className="boxes-container">
        {/* Render first 8 boxes */}
        {boxesItems.slice(0, 9).map((item, index) => (
            <div key={index} className="box">
                <h2 className='item-head'>{item.head}</h2>
                <div className="box-images">
                    {item.images.map((image, idx) => (
                        <div key={idx} className={`image-item ${item.id === 7 || item.id === 8 ? 'large-image' : ''}`}>
                            <img src={image.src} alt={image.alt} />
                            <p>{image.text}</p>
                        </div>
                    ))}
                </div>
                <div className='para-div'>
                    <p className="box-para">{item.para}</p>
                </div>
            </div>
        ))}

        {/* Render the slider after the first 8 boxes if showSlider is true */}
        {showSlider && (
            <div className="slider-container">
                <h2>Top Picks for Pakistan</h2>
                <Slider {...settings}>
                    {images.map((item, index) => (
                        <div key={index} className="slider-item">
                            <img src={item.src} alt={item.alt} className="slider-image" />
                        </div>
                    ))}
                </Slider>
            </div>
        )}

        {/* Render the remaining boxes after the slider */}
        {boxesItems.slice(9).map((item, index) => (
            <div key={index + 9} className="box">
                <h2 className='item-head'>{item.head}</h2>
                <div className="box-images">
                    {item.images.map((image, idx) => (
                        <div key={idx} className={`image-item ${item.id === 7 || item.id === 8 ? 'large-image' : ''}`}>
                            <img src={image.src} alt={image.alt} />
                            <p>{image.text}</p>
                        </div>
                    ))}
                </div>
                <div className='para-div'>
                    <p className="box-para">{item.para}</p>
                </div>
            </div>
        ))}
{/* {boxesItems.slice(8, 12).map((item, index) => (
                <div key={index + 8} className="box">
                    <h2 className='item-head'>{item.head}</h2>
                    <div className="box-images">
                        {item.images.map((image, idx) => (
                            <div key={idx} className={`image-item ${item.id === 7 || item.id === 8 ? 'large-image' : ''}`}>
                                <img src={image.src} alt={image.alt} />
                                <p>{image.text}</p>
                            </div>
                        ))}
                    </div>
                    <div className='para-div'>
                        <p className="box-para">{item.para}</p>
                    </div>
                </div>
            ))} */}

            {/* Second Slider after the 4 boxes */}
            {showSlider && (
                <div className="slider-container">
                    <h2>Discover More</h2>
                    <Slider {...settings}>
                        {moreImages.map((item, index) => (
                            <div key={index} className="slider-item">
                                <img src={item.src} alt={item.alt} className="slider-image" />
                            </div>
                        ))}
                    </Slider>
                </div>
            )}

            {boxesItems.slice(13).map((item, index) => (
                <div key={index + 12} className="box">
                    <h2 className='item-head'>{item.head}</h2>
                    <div className="box-images">
                        {item.images.map((image, idx) => (
                            <div key={idx} className={`image-item ${item.id === 7 || item.id === 8 ? 'large-image' : ''}`}>
                                <img src={image.src} alt={image.alt} />
                                <p>{image.text}</p>
                            </div>
                        ))}
                    </div>
                    <div className='para-div'>
                        <p className="box-para">{item.para}</p>
                    </div>
                </div>
            ))}

            {showSlider && (
                <div className="slider-container">
                    <h2>Discover More</h2>
                    <Slider {...extrasettings}>
                        {extraMoreImages.map((item, index) => (
                            <div key={index} className="slider-item">
                                <img src={item.src} alt={item.alt} className="slider-image-books" />
                            </div>
                        ))}
                    </Slider>
                </div>
            )}

    </div>
);
};

export default Boxes;