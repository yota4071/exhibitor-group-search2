import { style } from '@vanilla-extract/css';
import styleConstant from '../constant/styleConstant';

const bodyStyle = {
  groupListWrapperForMobile: style([
    {
      display: 'flex',
      flexWrap: 'wrap',
      gap: `40px calc((100% - ${styleConstant.GROUP_PANEL_WIDTH_PX}px * 2) / 2)`,
      justifyContent: 'space-between',
      marginBottom: '30px',
      width: '100%',
    },
  ]),
  groupListWrapperForPc: style([
    {
      display: 'flex',
      flexWrap: 'wrap',
      gap: `40px 20px`,
      justifyContent: 'flex-start',
      marginBottom: '30px',
      width: '100%',
    },
  ]),
  resultOverviewWrapper: style([
    {
      display: 'flex',
      fontSize: '0.8em',
      gap: '0 10px',
      justifyContent: 'space-between',
      margin: `10px 0`,
      width: '100%',
    },
  ]),
  searchButton: style([
    {
      // 親要素の幅に合わせる
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.25)',

      height: '100%',

      padding: 0,
      // 親要素の高さを継承する
      width: `${styleConstant.SEARCH_INPUT_HEIGHT_PX}px`,
    },
  ]),
  searchButtonWrapper: style([
    {
      // 明示的な高さ
      height: '100%',
      width: `${styleConstant.SEARCH_INPUT_HEIGHT_PX}px`, // 親要素の高さを継承する,
    },
  ]),
  searchIcon: style([
    {
      height: '60%',
      position: 'relative',
      top: '5%',
      width: '60%',
    },
  ]),

  searchIconWrapper: style([
    {
      alignItems: 'center',
      display: 'flex',

      // 親要素の高さに合わせる,
      flexDirection: 'column',

      // 親要素の幅に合わせる
      height: '100%',

      justifyContent: 'center',
      width: `${styleConstant.SEARCH_INPUT_HEIGHT_PX}px`,
    },
  ]),
  topSection: style([
    {
      display: 'flex',
      gap: '0 20px',
      height: `${styleConstant.SEARCH_INPUT_HEIGHT_PX}px`,
      justifyContent: 'space-between',
      width: '100%', // 明示的な高さを設定する場合
    },
  ]),
  wrapper: style([
    {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      margin: '0 auto',
      width: '90%',
    },
  ]),
};

export default bodyStyle;
