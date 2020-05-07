import React from 'react';
import useSound from 'use-sound';

// Load sound files
import fart1Sfx from '../sounds/fart-2.mp3';

// Load images
import fartHandsOn from '../img/fart-hands-on.png';

// Our stories meta-data
export default {
  title: `1) Let's play a sound`
};


export const SimpleFartHands = () => {
  const [play] = useSound(fart1Sfx);

  return <img src={fartHandsOn} onClick={play}/>
}