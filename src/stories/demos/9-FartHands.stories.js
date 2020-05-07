import React from 'react';
import useSound from 'use-sound';

import fart1Sfx from '../sounds/fart-2.mp3';
import fart2Sfx from '../sounds/fart-3.mp3';

import fartHandsOff from '../img/fart-hands-off.png';
import fartHandsOn from '../img/fart-hands-on.png'

export default { title: '4) Sorry, but…' };


const randomNumber = (min, max) => Math.random() * (max - min) + min; 

export const FartHands = () => {
  const [isDown, setIsDown] = React.useState(false);

  const [playFart1] = useSound(fart1Sfx, {playbackRate: randomNumber(1.0, 2.5)});
  const [playFart2] = useSound(fart2Sfx, {playbackRate: randomNumber(1.0, 2.5)});

  const onMouseDown = () => { setIsDown(true); playFart1(); };
  const onMouseUp = () => { setIsDown(false); playFart2(); }

  return <img src={isDown ? fartHandsOn : fartHandsOff} onMouseDown={onMouseDown} onMouseUp={onMouseUp}/>
}

