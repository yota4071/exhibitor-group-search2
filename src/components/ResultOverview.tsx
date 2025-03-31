import bodyStyle from '@/common/styles/body.css';

const ResultOverview = ({
  numOfResult,
  searchedKeyword,
  handleOnReset,
}: {
  handleOnReset: () => void;
  numOfResult: number;
  searchedKeyword: string;
}) => {
  return (
    <>
      <div className={bodyStyle.resultOverviewWrapper}>
        <div>
          {`${numOfResult}件  ${searchedKeyword !== '' ? `「${searchedKeyword}」の検索結果` : '全団体を表示中'}`}
        </div>
        {searchedKeyword !== '' && (
          <div style={{ textDecoration: 'underline' }} onClick={handleOnReset}>
            検索結果をリセットする
          </div>
        )}
      </div>
    </>
  );
};

export default ResultOverview;
