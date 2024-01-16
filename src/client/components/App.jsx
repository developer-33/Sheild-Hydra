import { useState } from 'react';
import PhotoCarousel from './Carousel.jsx';
import Login from '/home/fletcher/Marvel_s_h/src/client/components/Login.jsx';
// import MyCarouselComponent from '/home/fletcher/Marvel_s_h/src/client/components/Carousel.jsx';
// import MyLogoComponent from '/home/fletcher/Marvel_s_h/src/client/components/MyLogoComponent.jsx';

function App() {

  const photos = [
    { frontImage: '/src/client/assets/Shield/IMG_1075.jpeg', backImage: '/src/client/assets/Shield/Agent_Coulson.jpeg' },
    { frontImage: '/src/client/assets/Shield/Agent_Fitz.jpeg', backImage: '/src/client/assets/Shield/Agent_Simmons.jpeg' },
    // Add more photo objects as needed
  ];
  return (
    <div className='App'>
      
        <Login />
        const photos = [
        <h1>React Photo Carousel with Flipping Cards</h1>
      <PhotoCarousel photos={photos} />
  // Add more photo objects as needed
];
        {/* <MyCarouselComponent/> */}

    </div>
  );
}

export default App;
