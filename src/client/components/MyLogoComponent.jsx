import React from 'react';
import logoGif from '/home/fletcher/wholeMarvel/capstone-app-template/src/client/assets/Hydra/logoGif.gif';

const MyLogoComponent = () => {
  return (
    <div class= "myLogo">
      <img src={logoGif} alt="Logo GIF" />
    </div>
  );
};

export default MyLogoComponent;