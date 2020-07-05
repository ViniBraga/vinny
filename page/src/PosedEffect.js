import posed from 'react-pose';

export const TextEffect = posed.div({
    hoverable: true,
    pressable: true,
    init: {
      scale: 1,
      textShadow: '0px 0px 0px rgba(0,0,0,0)'
    },
    hover: {
      scale: 1.2,
      textShadow: '0px 5px 10px rgba(0,0,0,0.2)'
    },
    press: {
      scale: 1.1,
      textShadow: '0px 2px 5px rgba(0,0,0,0.1)'
    }
});