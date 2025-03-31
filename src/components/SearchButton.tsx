import { Button } from '@nextui-org/react';
import { MouseEventHandler } from 'react';
import bodyStyle from '@/common/styles/body.css';
import * as globalStyle from '@/common/styles/global.css';

const SearchButton = ({ onClick }: { onClick: MouseEventHandler<HTMLButtonElement> }) => {
  return (
    <div className={bodyStyle.searchButtonWrapper}>
      <Button
        color={'danger'}
        aria-label={'Search'}
        className={bodyStyle.searchButton}
        isIconOnly
        onClick={onClick}
      >
        <div className={bodyStyle.searchIconWrapper}>
          <img src={'./search.svg'} className={bodyStyle.searchIcon} alt={'search icon'} />
          <div className={globalStyle.halfFontSize}>{`検索する`}</div>
        </div>
      </Button>
    </div>
  );
};

export default SearchButton;
