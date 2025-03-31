import { style, keyframes } from '@vanilla-extract/css';

const dotsAnimation = keyframes({
  '0%, 100%': { content: '""' },
  '25%': { content: '"."' },
  '50%': { content: '".."' },
  '75%': { content: '"..."' },
});

export const loadingStyle = style({
  '::after': {
    animation: `${dotsAnimation} 1.5s steps(1, end) infinite`,
    content: '',
  },
  color: 'white',
  display: 'inline-block',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
});
