// カスタムフック: UAを基にPCかどうか判定
import { useEffect, useState } from 'react';

function useIsPCFromUA() {
  const [isPC, setIsPC] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent;

    // モバイル判定の簡易的な例。必要に応じて詳細な判定を追加してください。
    const isMobile = /iPhone|iPad|iPod|Android/i.test(ua);
    setIsPC(!isMobile);
  }, []);

  return isPC;
}

export default useIsPCFromUA;
