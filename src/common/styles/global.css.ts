import { style } from '@vanilla-extract/css';

export const flexBoxCentered = style([
  {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
]);

export const flexBoxColumnCentered = style([
  flexBoxCentered,
  {
    flexDirection: 'column',
  },
]);

export const flexBoxRowCentered = style([
  flexBoxCentered,
  {
    flexDirection: 'row',
  },
]);

export const halfFontSize = style([
  {
    fontSize: '0.5em',
  },
]);

export const fullScreen = style([
  {
    height: '100vh',
    left: 0,
    position: 'fixed',
    top: 0,
    width: '100vw',
    zIndex: 100,
  },
]);
