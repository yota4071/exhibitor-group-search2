import { halfFontSize } from '@/common/styles/global.css';
import { archOverlay, archText } from '@/common/styles/header.css';

const Header = () => {
  return (
    <header>
      <div style={{ position: 'relative', width: '100vw' }}>
        <img src={'/header-image.png'} alt='header image' width={'100%'} />
        <div className={archOverlay}>
          <div className={archText}>
            <div>出展団体検索アプリ</div>
            <div className={halfFontSize}>{"in Rit's Welcome Festival"}</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
