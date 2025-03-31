'use client';
import { useEffect, useState } from 'react';
import initGroupData from '../../public/groupData.json';
import mochyPopPOne from '@/common/fonts/mochiyPopPOne';
import useIsPCFromUA from '@/common/hook/useIsPCFromUAHook';
import bodyStyle from '@/common/styles/body.css';
import GroupPanelType from '@/common/type/groupPanelType';
import GroupType from '@/common/type/groupType';
import { search } from '@/common/util/algolia';
import { expandToGroupBySearchResponse } from '@/common/util/algoliaParserUtils';
import withTimeout from '@/common/util/withTimeout';
import GroupList from '@/components/GroupList';
import Header from '@/components/Header';
import Loading from '@/components/Loading';
import ResultOverview from '@/components/ResultOverview';
import SearchButton from '@/components/SearchButton';
import SearchInput from '@/components/SearchInput';

export default function Home() {
  const isPC = useIsPCFromUA();
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [groupPanelsData, setGroupPanelData] = useState<GroupPanelType[]>([]);
  const [preSearchedText, setPreSearchedText] = useState<string>('');

  useEffect(() => {
    reset();
  }, []);

  useEffect(() => {
    if (isLoading) {
      document.addEventListener('touchmove', disableScroll, { passive: false });
    } else {
      document.removeEventListener('touchmove', disableScroll);
    }
  }, [isLoading]);

  function reset() {
    const initGroupPanelsData: GroupPanelType[] = [];
    (initGroupData as GroupType[]).forEach((group) => {
      initGroupPanelsData.push({
        group: group,
        matchedText: {
          campus: null,
          description: null,
          name: null,
        },
      });
    });
    setGroupPanelData(initGroupPanelsData);
    setPreSearchedText('');
  }

  async function handleOnClicked(arg: string) {
    if (arg === '') {
      window.alert('何も入力されていません');
    } else if (arg === preSearchedText) {
      window.alert('同じ検索ワードです');
    } else {
      setIsLoading(true);
      withTimeout(search(arg), 5000)
        .then((searchResponse) => {
          console.log('search success');
          setGroupPanelData(expandToGroupBySearchResponse(searchResponse));
          setPreSearchedText(arg);
        })
        .catch((e) => {
          window.alert('要求がタイムアウトしました');
          console.error('Error:', e.message);
        });
      setIsLoading(false);
    }
  }

  return (
    <main className={mochyPopPOne.className}>
      <div style={isLoading ? { overflow: 'hidden', pointerEvents: 'none' } : {}}>
        <Header />
        <div className={bodyStyle.wrapper}>
          <div className={bodyStyle.topSection}>
            <SearchInput onValueChange={setInputValue} />
            <SearchButton
              onClick={async () => {
                await handleOnClicked(inputValue);
              }}
            />
          </div>
          <ResultOverview
            numOfResult={groupPanelsData.length}
            searchedKeyword={preSearchedText}
            handleOnReset={reset}
          />
          <GroupList targetGroupPanelsData={groupPanelsData} isPc={isPC} />
        </div>
      </div>
      {isLoading && <Loading />}
    </main>
  );
}

function disableScroll(event: any) {
  event.preventDefault();
}
