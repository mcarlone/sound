import React from 'react';
import useSound from 'use-sound';

import popDownSfx from '../sounds/pop-down.mp3';
import popUpOnSfx from '../sounds/pop-up-on.mp3';
import popUpOffSfx from '../sounds/pop-up-off.mp3';
import checkBoxAudioSprite from '../sounds/checkbox-sprite.mp3';

export default { title: '2) Audio Sprites' };


export const CheckBox = () => {
    const [isChecked, setIschecked] = React.useState(false);
  
    const [play] = useSound(popUpOnSfx, {
      volume: 0.5
    });
  
    const onChange = () => { setIschecked(!isChecked); play(); };
  
    return <input type="checkbox" checked={isChecked} onChange={onChange} />
};


export const CheckBox2 = () => {
    const [isChecked, setIschecked] = React.useState(false);
  
    const [playDown] = useSound(popDownSfx, { volume: 0.5 });
    const [playUp] = useSound(popUpOnSfx, { volume: 0.5 });
  
    const onChange = () => setIschecked(!isChecked)
  
    return <input type="checkbox" checked={isChecked} onChange={onChange} onMouseDown={ playDown } onMouseUp={ playUp }/>
};


export const CheckBox3 = () => {
    const [isChecked, setIschecked] = React.useState(false);
  
    const [playDown] = useSound(popDownSfx, { volume: 0.5 });
    const [playUpOn] = useSound(popUpOnSfx, { volume: 0.5 });
    const [playUpOff] = useSound(popUpOffSfx, { volume: 0.5 });
  
    const onChange = () => setIschecked(!isChecked); 
    const onMouseUp = () => isChecked ? playUpOff() : playUpOn();
  
    return <input type="checkbox" checked={isChecked} onChange={onChange} onMouseDown={ playDown } onMouseUp={onMouseUp}/>
};


export const AudioSpriteCheckBox = () => {
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