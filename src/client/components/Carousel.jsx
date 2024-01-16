import React, { useState } from 'react';
import CardFlip from 'react-card-flip';

const PhotoCarousel = ({ photos }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div>
      {photos.map((photo, index) => (
        <CardFlip key={index} isFlipped={isFlipped} flipDirection="horizontal">
          {/* Front of the card */}
          <div onClick={handleFlip}>
            <img src={photo.frontImage} alt={`Front ${index}`} />
          </div>
          
          {/* Back of the card */}
          <div onClick={handleFlip}>
            <img src={photo.backImage} alt={`Back ${index}`} />
          </div>
        </CardFlip>
      ))}
    </div>
  );
};

export default PhotoCarousel;


// import React, { useState } from 'react';

// const Carousel = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const handlePrev = () => {
//     setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 2));
//   };

//   const handleNext = () => {
//     setActiveIndex((prevIndex) => (prevIndex < 2 ? prevIndex + 1 : 0));
//   };

//   return (
//     <div id="myCarousel" className="carousel slide" data-ride="carousel">
//       {/* Indicators */}
//       <ol className="carousel-indicators">
//         <li
//           data-target="#myCarousel"
//           data-slide-to="0"
//           className={activeIndex === 0 ? 'active' : ''}
//         ></li>
//         <li
//           data-target="#myCarousel"
//           data-slide-to="1"
//           className={activeIndex === 1 ? 'active' : ''}
//         ></li>
//         <li
//           data-target="#myCarousel"
//           data-slide-to="2"
//           className={activeIndex === 2 ? 'active' : ''}
//         ></li>
//       </ol>

//       {/* Wrapper for slides */}
//       <div className="carousel-inner">
//         <div className={`item ${activeIndex === 0 ? 'active' : ''}`}>
//           <img src="/src/client/assets/Shield/Agent_Fitz.jpeg" alt="Los Angeles" />
//         </div>

//         <div className={`item ${activeIndex === 1 ? 'active' : ''}`}>
//           <img src="/src/client/assets/Shield/Agent_Coulson.jpeg" alt="Chicago" />
//         </div>

//         <div className={`item ${activeIndex === 2 ? 'active' : ''}`}>
//           <img src="/src/client/assets/Shield/Agent_May.jpeg" alt="New York" />
//         </div>
//       </div>

//       {/* Left and right controls */}
//       <a
//         className="left carousel-control"
//         href="#myCarousel"
//         data-slide="prev"
//         onClick={handlePrev}
//       >
//         <span className="glyphicon glyphicon-chevron-left"></span>
//         <span className="sr-only">Previous</span>
//       </a>
//       <a
//         className="right carousel-control"
//         href="#myCarousel"
//         data-slide="next"
//         onClick={handleNext}
//       >
//         <span className="glyphicon glyphicon-chevron-right"></span>
//         <span className="sr-only">Next</span>
//       </a>
//     </div>
//   );
// };

// export default Carousel;
//  import React from 'react';
// import Carousel from 'react-bootstrap/Carousel';
// import './carousel.css';
// function CarouselComponent() {
//   return (
//     <Carousel>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="/src/client/assets/Shield/Agent_Coulson.jpeg"
//           alt="First slide"
//         />
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="/src/client/assets/Shield/Agent_May.jpeg"
//           alt="Second slide"
//         />

//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="/src/client/assets/Shield/Agent_Ward.jpeg"
//           alt="Third slide"
//         />

//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default CarouselComponent;