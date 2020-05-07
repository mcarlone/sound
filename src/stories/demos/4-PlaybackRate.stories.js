import React from 'react';
import useSound from 'use-sound';
import { withKnobs, optionsKnob as options } from '@storybook/addon-knobs';

import singingBowlFSfx from '../sounds/singing-bowl-7.5-f-sharp.mp3';

import singingBowl from '../img/singing-bowl-transparent.png';

export default { 
    title: '3) Playback Rates',
    decorators: [withKnobs]
};

export const SimpleSingingBowl = () => {
    const [play, { stop, isPlaying }] = useSound(singingBowlFSfx, {
        playbackRate: 1.0, 
        volume: 1.0
    });

    // const onMouseDown = () => play()
    const onMouseDown = () => isPlaying? stop() : play()

    return <img src={singingBowl} onMouseDown={ onMouseDown } />;
};

const bowlStyle = (bowlWidth, isPlaying) => {
    return {
        margin: '20px',
        width: bowlWidth+'px',
        boxShadow: isPlaying ? "0 0 30px 20px #fff, 0 0 40px 20px #f0f, 0 0 80px 50px #0ff" : null
    }
};

const FlexSingingBowl = ({scale}) => {
  const MIN_WIDTH = 100, MAX_WIDTH = 300;
  const MIN_PLAYBACK_RATE = 1.0, MAX_PLAYBACK_RATE = 3.0;
  const MIN_VOLUME = 0.3, MAX_VOLUME = 0.8;

  const bowlWidth = (MAX_WIDTH - MIN_WIDTH) * scale + MIN_WIDTH;
  const bowlPlaybackRate = (MAX_PLAYBACK_RATE - MIN_PLAYBACK_RATE) * (1.0 - scale) + MIN_PLAYBACK_RATE;
  const bowlVolume = (MAX_VOLUME - MIN_VOLUME) * scale + MIN_VOLUME;

  const [play, { stop, isPlaying }] = useSound(singingBowlFSfx, {playbackRate: bowlPlaybackRate, volume: bowlVolume});

  return <img src={singingBowl} onMouseDown={ () => isPlaying? stop() : play()} style={bowlStyle(bowlWidth, isPlaying)}/>;
}


export const SingingBowls = () => {
    const bowlScales = [0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4];
    return <>{ bowlScales.map( scale => <FlexSingingBowl scale={scale}/> ) }</>
}




export const SingingBowlKnobs = () => {

    const valuesMultiSelect = {
        Crown: '0.1',
        ThirdEye: '0.2',
        Throat: '0.35',
        Heart: '0.4',
        SolarPlexus: '0.5',
        Sacral: '0.65',
        Root: '0.8'
    };
    const optionsMultiSelect = options('Chakras', valuesMultiSelect, [], {
        display: 'check',
    });

    return <>{ optionsMultiSelect.map( scale => <FlexSingingBowl scale={scale}/> ) }</>
}
