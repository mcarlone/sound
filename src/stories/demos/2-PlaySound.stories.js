import React from 'react';
import useSound from 'use-sound';

import fart1Sfx from '../sounds/fart-2.mp3';
import fart2Sfx from '../sounds/fart-3.mp3';
import checkBoxAudioSprite from '../sounds/checkbox-sprite.mp3';
import singingBowlFSfx from '../sounds/singing-bowl-7.5-f-sharp.mp3';

import fartHandsOff from '../img/fart-hands-off.png';
import fartHandsOn from '../img/fart-hands-on.png';
import singingBowl from '../img/singing-bowl-medium-gold-hg75.jpg';

export default { title: 'Fart Hands' };


const randomNumber = (min, max) => Math.random() * (max - min) + min; 

export const FartHands = () => {
  const [isDown, setIsDown] = React.useState(false);

  const [playFart1] = useSound(fart1Sfx, {playbackRate: randomNumber(1.0, 2.5)});
  const [playFart2] = useSound(fart2Sfx, {playbackRate: randomNumber(1.0, 2.5)});

  const onMouseDown = () => { setIsDown(true); playFart1(); };
  const onMouseUp = () => { setIsDown(false); playFart2(); }

  return <img src={isDown ? fartHandsOn : fartHandsOff} onMouseDown={onMouseDown} onMouseUp={onMouseUp}/>
}


export const AudioSprites = () => {
  const [isChecked, setIschecked] = React.useState(false);

  const [play] = useSound(checkBoxAudioSprite, {
    sprite: {
      down: [20, 80],
      upOn: [125, 60],
      upOff: [246, 111]
    },
    volume: 0.5
  });

  const onMouseUp = () => isChecked ? play({id:'upOff'}) : play({id:'upOn'})
  const onChange = () => setIschecked(!isChecked)

  return <input type="checkbox" checked={isChecked}
    onChange={onChange} 
    onMouseDown={ () => play({id:'down'}) } 
    onMouseUp={ onMouseUp }/>
};

export const SingingBowl = () => {
  const MAX_WIDTH = 300;
  return null;
}

export const SingingBowls = () => {

  const [playBowl, { stop, isPlaying }] = useSound(singingBowlFSfx, {playbackRate: 1.0, volume: 0.8});
  const [playBowlSmall, { stop: smallStop, isPlaying: smallIsPlaying }] = useSound(singingBowlFSfx, {playbackRate: 3.0, volume: 0.4});

  return (
    <div>
      <img src={singingBowl} onMouseDown={ () => isPlaying? stop() : playBowl()}/>
      { isPlaying ? "Big vibes..." : null }
      <img src={singingBowl} onMouseDown={ () => smallIsPlaying? smallStop() : playBowlSmall()} style={{width: '100px'}}/>
      { smallIsPlaying ? "Little vibes..." : null }
    </div>)
    
}