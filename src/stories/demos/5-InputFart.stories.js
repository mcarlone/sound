import React from 'react';
import useSound from 'use-sound';

import fart1Sfx from '../sounds/fart-2.mp3';
import fart2Sfx from '../sounds/fart-3.mp3';
import fart3Sfx from '../sounds/fart-01.mp3';


export default { title: '5) Input' };


const randomNumber = (min, max) => Math.random() * (max - min) + min; 



export const InputFarter = () => {
  const [playFart1] = useSound(fart1Sfx, {playbackRate: randomNumber(0.75, 1.0)});
  const [playFart2] = useSound(fart2Sfx, {playbackRate: randomNumber(1.0, 1.25)});
  const [playFart3] = useSound(fart3Sfx, {
    sprite: {
      deep: [100, 1300],
    },
    playbackRate: 1.0,
    volume: 1.0
  });

  const onKeyDown = event => {
    if(event.keyCode === 13) { // Enter
      playFart3({id:'deep'});
    } else {
      Math.random() > 0.5 ? playFart1() : playFart2();
    }
  };

  const onMouseDown = () => playFart3({id:'deep'});

  return (
    <>
      <input onChange={onKeyDown} onBlur={onMouseDown}/>
      <input onChange={onKeyDown}/>
      <button type='submit' onMouseDown={onMouseDown}>👏</button>
    </>
  );
}

