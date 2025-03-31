import Lottie from 'react-lottie';
import animationData from '../../public/loadingLottieAnimation.json';
import * as globalStyle from '@/common/styles/global.css';
import { loadingStyle } from '@/common/styles/loadingWordAnimation.css';

const defaultOptions = {
  animationData: animationData,
  autoplay: true,
  loop: true,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const Loading = () => {
  return (
    <>
      <div
        className={`${globalStyle.fullScreen} ${globalStyle.flexBoxCentered}`}
        style={{
          backgroundColor: 'rgba(0,0,0,0.7)',
          flexDirection: 'column',
          pointerEvents: 'none',
        }}
      >
        <Lottie options={defaultOptions} height={400} width={400} />
        <div className={loadingStyle}>Loading </div>
      </div>
    </>
  );
};

export default Loading;
