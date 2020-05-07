import React from 'react';
import useSound from 'use-sound';

import singingBowlFSfx from '../sounds/singing-bowl-7.5-f-sharp.mp3';

import singingBowl from '../img/singing-bowl-medium-gold-hg75.jpg';

export default { title: '3) Playback Rates' };


const SingingBowl = () => {
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