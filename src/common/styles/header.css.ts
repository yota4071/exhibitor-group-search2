import { style } from '@vanilla-extract/css';

const archOverlay = style([
  {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: '50%/100% 100% 0 0',
    bottom: 0,
    display: 'flex',
    height: '50%',
    justifyContent: 'center',
    left: 0,
    overflow: 'hidden',
    position: 'absolute',
    width: '100%',
  },
]);

const archText = style([
  {
    color: 'black',
    fontSize: '25px',
    position: 'relative',
    textAlign: 'center',
  },
]);

export { archOverlay, archText };
