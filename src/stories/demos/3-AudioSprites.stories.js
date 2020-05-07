import React from 'react';
import useSound from 'use-sound';

import checkBoxAudioSprite from '../sounds/checkbox-sprite.mp3';

export default { title: 'Audio Sprites' };


export const CheckBox = () => {
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