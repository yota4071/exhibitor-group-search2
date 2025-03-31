import { useEffect, useState } from 'react';
import boothInfoData, { BoothInfoType } from '@/common/data/boothInfoData';
import groupProjectInfoData, { GroupProjectInfoType } from '@/common/data/groupProjectInfoData';
import stageInfoData, { StageInfoType } from '@/common/data/stageInfoData';
import groupPanelStyle from '@/common/styles/groupPanel.css';
import { toCampusName } from '@/common/type/campusType';
import formatDate from '@/common/util/formatDate';

const ExhibitionInfoContent = ({ groupId }: { groupId: number }) => {
  const [targetGroupProjectInfoData, setTargetGroupProjectInfoData] = useState<
    GroupProjectInfoType[]
  >([]);
  const [targetBoothInfoData, setTargetBoothInfoData] = useState<BoothInfoType[]>([]);
  const [targetStageInfoData, setTargetStageInfoData] = useState<StageInfoType[]>([]);

  useEffect(() => {
    setTargetGroupProjectInfoData(groupProjectInfoData.filter((data) => data.groupId === groupId));
    setTargetBoothInfoData(boothInfoData.filter((data) => data.groupId === groupId));
    setTargetStageInfoData(stageInfoData.filter((data) => data.groupId === groupId));
  }, [groupId]);

  return (
    <div style={{ marginBottom: '1em' }}>
      <h1 className={groupPanelStyle.mainHeader}>{'出展情報'}</h1>
      {targetBoothInfoData.length > 0 && (
        <BoothInfoDataContent argBoothInfoData={targetBoothInfoData} />
      )}
      {targetStageInfoData.length > 0 && (
        <StageInfoDataContent argStageInfoData={targetStageInfoData} />
      )}
      {targetGroupProjectInfoData.length > 0 && (
        <GroupProjectInfoDataContent argGroupProjectInfoData={targetGroupProjectInfoData} />
      )}
      {targetBoothInfoData.length === 0 &&
        targetStageInfoData.length === 0 &&
        targetGroupProjectInfoData.length === 0 && <p>出展情報なし</p>}
    </div>
  );
};

const TitleAndDetail = ({ title, detail }: { detail: string; title: string }) => (
  <div>
    <h1>{`〜${title}〜`}</h1>
    <p>{detail}</p>
  </div>
);

const GroupProjectInfoDataContent = ({
  argGroupProjectInfoData,
}: {
  argGroupProjectInfoData: GroupProjectInfoType[];
}) => {
  return (
    <div>
      {argGroupProjectInfoData.map((data, index) => (
        <div key={`groupProjectContent-${data.id}`} style={{ marginBottom: '0.5em' }}>
          <h1 className={groupPanelStyle.subHeader}>{`団体企画 ${toCircled(index + 1)}`}</h1>
          <TitleAndDetail title={'企画名'} detail={data.eventName} />
          <TitleAndDetail title={'実施内容'} detail={data.projectContent} />
          <TitleAndDetail title={'実施日時'} detail={data.dateDesc} />
          <TitleAndDetail title={'実施キャンパス'} detail={toCampusName(data.campus)} />
          <TitleAndDetail title={'実施場所'} detail={data.areaDesc} />
        </div>
      ))}
    </div>
  );
};

const BoothInfoDataContent = ({ argBoothInfoData }: { argBoothInfoData: BoothInfoType[] }) => {
  return (
    <div>
      {argBoothInfoData.map((data, index) => {
        let dateContentArray = [];
        if (data.availability['4/3']) {
          dateContentArray.push('4/3 (水)');
        }
        if (data.availability['4/4']) {
          dateContentArray.push('4/4 (木)');
        }
        return (
          <div key={`boothContent-${data.id}`} style={{ marginBottom: '0.5em' }}>
            <h1
              className={groupPanelStyle.subHeader}
            >{`ブース出展情報 ${toCircled(index + 1)}`}</h1>
            <TitleAndDetail title={'キャンパス'} detail={toCampusName(data.campus)} />
            {data.areaClassification === undefined ? (
              <TitleAndDetail title={'ブース場所'} detail={`${data.areaNum.toString()}番`} />
            ) : (
              <TitleAndDetail
                title={'ブース場所'}
                detail={`${data.areaClassification}エリア ${data.areaNum.toString()}番`}
              />
            )}
            <TitleAndDetail title={'出展日'} detail={dateContentArray.join(',  ')} />
          </div>
        );
      })}
    </div>
  );
};

const StageInfoDataContent = ({ argStageInfoData }: { argStageInfoData: StageInfoType[] }) => {
  return (
    <div>
      {argStageInfoData.map((data, index) => (
        <div key={`stageContent-${data.id}`} style={{ marginBottom: '0.5em' }}>
          <h1
            className={groupPanelStyle.subHeader}
          >{`ステージ出演情報 ${toCircled(index + 1)}`}</h1>
          <TitleAndDetail title={'イベント名'} detail={data.eventName} />
          <TitleAndDetail title={'出演キャンパス'} detail={toCampusName(data.campus)} />
          <TitleAndDetail
            title={'出演日時'}
            detail={formatDate(data.datetimeToStart, data.datetimeToEnd)}
          />
          {data.description !== undefined && (
            <TitleAndDetail title={'説明'} detail={data.description} />
          )}
        </div>
      ))}
    </div>
  );
};

function toCircled(num: number) {
  const base = '①'.charCodeAt(0);
  return String.fromCharCode(base + num - 1);
}

export default ExhibitionInfoContent;
