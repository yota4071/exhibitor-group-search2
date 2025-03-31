import { globalStyle, style } from '@vanilla-extract/css';
import styleConstant from '@/common/constant/styleConstant';

const basicStyle = style([
  {
    backgroundColor: 'white',
    borderRadius: '10px',
    height: `${styleConstant.GROUP_PANEL_HEIGHT_PX}px`,
    overflow: 'hidden',
    width: `${styleConstant.GROUP_PANEL_WIDTH_PX}px`,
  },
]);

const groupPanelStyle = {
  basicStyle: style([
    basicStyle,
    {
      boxShadow: '1px 4px 8px rgba(0, 0, 0, 0.25)',
    },
  ]),
  campusWrapper: style([
    {
      fontSize: '0.35em',
      margin: '0 auto',
      marginBottom: '5px',
      textAlign: 'center',
    },
  ]),
  contentWrapper: style([
    {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      height: `${styleConstant.GROUP_PANEL_HEIGHT_PX / 2}px`,
      justifyContent: 'flex-start',
      margin: '5px auto',
      width: '90%',
    },
  ]),
  dummyStyle: style([
    basicStyle,
    {
      pointerEvents: 'none',
    },
  ]),
  groupNameWrapper: style([
    {
      fontSize: '0.45em',
      margin: '0 auto',
      marginBottom: '0.5px',
      textAlign: 'center',
    },
  ]),
  imgWrapper: style([
    {
      height: `${styleConstant.GROUP_PANEL_HEIGHT_PX / 2}px`,
      overflow: 'hidden',
      position: 'relative',
      width: `${styleConstant.GROUP_PANEL_WIDTH_PX}px`,
    },
  ]),
  mainHeader: style([
    {
      fontSize: '1.3em',
      fontWeight: 'bold',
    },
  ]),
  panelContent: style([
    {
      fontSize: '0.45rem',
    },
  ]),
  subHeader: style([
    {
      fontSize: '1.0em',
      fontWeight: 'bold',
    },
  ]),
};

globalStyle('.highlight em', {
  backgroundColor: 'yellow', // 例として文字色を赤に設定
  fontStyle: 'normal', // 斜めにしない
});

export default groupPanelStyle;
