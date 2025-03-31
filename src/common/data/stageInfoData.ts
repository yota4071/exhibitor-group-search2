import { Campus, CampusType } from '@/common/type/campusType';
import { EventKind, EventKindType } from '@/common/type/eventKindType';

type StageInfoType = {
  campus: CampusType;
  datetimeToEnd: Date;
  datetimeToStart: Date;
  description?: string;
  eventKind: EventKindType;
  eventName: string;
  groupId: number;
  id: number;
};

const stageInfoData: StageInfoType[] = [
  {
    campus: Campus.KIC,
    datetimeToEnd: new Date(2024, 3, 3, 12, 23),
    datetimeToStart: new Date(2024, 3, 3, 12, 13),
    eventKind: EventKind.STAGE,
    eventName: '櫻嵐洛',
    groupId: 243,
    id: 1,
  },
  {
    campus: Campus.KIC,
    datetimeToEnd: new Date(2024, 3, 3, 12, 37),
    datetimeToStart: new Date(2024, 3, 3, 12, 27),
    eventKind: EventKind.STAGE,
    eventName: '競技ダンス',
    groupId: 185,
    id: 2,
  },
  {
    campus: Campus.KIC,
    datetimeToEnd: new Date(2024, 3, 3, 12, 51),
    datetimeToStart: new Date(2024, 3, 3, 12, 41),
    eventKind: EventKind.STAGE,
    eventName: '応援団',
    groupId: 30,
    id: 3,
  },
  {
    campus: Campus.KIC,
    datetimeToEnd: new Date(2024, 3, 3, 12, 51),
    datetimeToStart: new Date(2024, 3, 3, 12, 41),
    eventKind: EventKind.STAGE,
    eventName: '応援団',
    groupId: 32,
    id: 33,
  },
  {
    campus: Campus.KIC,
    datetimeToEnd: new Date(2024, 3, 3, 12, 51),
    datetimeToStart: new Date(2024, 3, 3, 12, 41),
    eventKind: EventKind.STAGE,
    eventName: '応援団',
    groupId: 31,
    id: 34,
  },
  {
    campus: Campus.KIC,
    datetimeToEnd: new Date(2024, 3, 4, 12, 27),
    datetimeToStart: new Date(2024, 3, 4, 12, 17),
    eventKind: EventKind.STAGE,
    eventName: 'dig up treasure',
    groupId: 170,
    id: 4,
  },
  {
    campus: Campus.KIC,
    datetimeToEnd: new Date(2024, 3, 4, 12, 41),
    datetimeToStart: new Date(2024, 3, 4, 12, 31),
    eventKind: EventKind.STAGE,
    eventName: 'mauloa',
    groupId: 225,
    id: 5,
  },
  {
    campus: Campus.KIC,
    datetimeToEnd: new Date(2024, 3, 4, 12, 55),
    datetimeToStart: new Date(2024, 3, 4, 12, 45),
    eventKind: EventKind.STAGE,
    eventName: "steppin'",
    groupId: 226,
    id: 6,
  },
  {
    campus: Campus.KIC,
    datetimeToEnd: new Date(2024, 3, 4, 13, 9),
    datetimeToStart: new Date(2024, 3, 4, 12, 59),
    eventKind: EventKind.STAGE,
    eventName: 'モジャバ',
    groupId: 212,
    id: 7,
  },
  {
    campus: Campus.KIC,
    datetimeToEnd: new Date(2024, 3, 4, 13, 23),
    datetimeToStart: new Date(2024, 3, 4, 13, 13),
    eventKind: EventKind.STAGE,
    eventName: 'Clef',
    groupId: 177,
    id: 8,
  },
  {
    campus: Campus.BKC,
    datetimeToEnd: new Date(2024, 3, 3, 12, 25),
    datetimeToStart: new Date(2024, 3, 3, 12, 10),
    description:
      '主に学園祭のステージでパフォーマンスを行っており、2023年度学園祭のエンディング企画に出演しました。フラッグやライフルを用いたダイナミックなパフォーマンスをご覧ください！',
    eventKind: EventKind.STAGE,
    eventName: 'カラーガードサークルLUSTER',
    groupId: 238,
    id: 9,
  },
  {
    campus: Campus.BKC,
    datetimeToEnd: new Date(2024, 3, 3, 12, 50),
    datetimeToStart: new Date(2024, 3, 3, 12, 35),
    description:
      'BKC唯一のストリートダンスサークルで、例年学園祭やウェルカムフェスティバルのステージに出演しています。ジャンルごとに異なる個性を武器に迫力のあるステージで楽しませます！',
    eventKind: EventKind.STAGE,
    eventName: 'R.D.C',
    groupId: 239,
    id: 10,
  },
  {
    campus: Campus.BKC,
    datetimeToEnd: new Date(2024, 3, 4, 12, 25),
    datetimeToStart: new Date(2024, 3, 4, 12, 10),
    description:
      'BKCを中心に他キャンパス生も交えて活動しています。バンドメンバーが固定ではく、様々なジャンルの曲や楽器を演奏できることが特徴です！定期演奏会や他サークルとの演奏会も行っています！',
    eventKind: EventKind.STAGE,
    eventName: 'Free Music Circle PEACE',
    groupId: 171,
    id: 11,
  },
  {
    campus: Campus.BKC,
    datetimeToEnd: new Date(2024, 3, 4, 12, 50),
    datetimeToStart: new Date(2024, 3, 4, 12, 35),
    description:
      '第12回　A cappella Spirits NEW COMERS -2023- 西日本大会 優勝・全国大会 優勝\n青春アカペラ甲子園全国ハモネプ大リーグ～2024春～　出場\n',
    eventKind: EventKind.STAGE,
    eventName: 'ReMember',
    groupId: 171,
    id: 12,
  },
  {
    campus: Campus.BKC,
    datetimeToEnd: new Date(2024, 3, 4, 13, 15),
    datetimeToStart: new Date(2024, 3, 4, 13, 0),
    description:
      '弾き語りやインストゥルメンタル、バンドなど様々な演奏形態で活動しています。毎週月・木曜日フォレストハウスでの活動に加え 、月1回の定期演奏会や季節イベントも行っています！',
    eventKind: EventKind.STAGE,
    eventName: 'アコースティックギターサークル',
    groupId: 235,
    id: 13,
  },
  {
    campus: Campus.BKC,
    datetimeToEnd: new Date(2024, 3, 4, 13, 40),
    datetimeToStart: new Date(2024, 3, 4, 13, 25),
    description:
      '2回生で構成された、東京事変と椎名林檎のコピーバンドです。ボーカルの表現力とそれを支える楽器体の完璧なリズムで、年齢関係なく楽しくなってリズムに乗ってしまう演奏をします！',
    eventKind: EventKind.STAGE,
    eventName: '「草津事変」',
    groupId: 172,
    id: 14,
  },
  {
    campus: Campus.BKC,
    datetimeToEnd: new Date(2024, 3, 4, 14, 5),
    datetimeToStart: new Date(2024, 3, 4, 13, 50),
    description:
      '3回生と大学院１回生で構成された、カネコアヤノのコピーバンドです。このバンドはサークル内で行っている定期演奏会の音源審査に合格し、演奏を披露した実力のあるバンドです！',
    eventKind: EventKind.STAGE,
    eventName: '「かねこ」',
    groupId: 172,
    id: 15,
  },
  {
    campus: Campus.BKC,
    datetimeToEnd: new Date(2024, 3, 4, 14, 30),
    datetimeToStart: new Date(2024, 3, 4, 14, 15),
    description:
      '3回生と大学院１回生で構成された、カネコアヤノのコピーバンドです。このバンドはサークル内で行っている定期演奏会の音源審査に合格し、演奏を披露した実力のあるバンドです！',
    eventKind: EventKind.STAGE,
    eventName: '京都チーム「櫻嵐洛」',
    groupId: 172,
    id: 16,
  },
  {
    campus: Campus.OIC,
    datetimeToEnd: new Date(2024, 3, 3, 12, 47),
    datetimeToStart: new Date(2024, 3, 3, 12, 31),
    eventKind: EventKind.STAGE,
    eventName: 'OICアコギサークル',
    groupId: 227,
    id: 17,
  },
  {
    campus: Campus.OIC,
    datetimeToEnd: new Date(2024, 3, 3, 13, 57),
    datetimeToStart: new Date(2024, 3, 3, 12, 47),
    eventKind: EventKind.STAGE,
    eventName: '立命館大学応援団',
    groupId: 30,
    id: 18,
  },
  {
    campus: Campus.OIC,
    datetimeToEnd: new Date(2024, 3, 3, 13, 57),
    datetimeToStart: new Date(2024, 3, 3, 12, 47),
    eventKind: EventKind.STAGE,
    eventName: '立命館大学応援団',
    groupId: 31,
    id: 19,
  },
  {
    campus: Campus.OIC,
    datetimeToEnd: new Date(2024, 3, 3, 13, 57),
    datetimeToStart: new Date(2024, 3, 3, 12, 47),
    eventKind: EventKind.STAGE,
    eventName: '立命館大学応援団',
    groupId: 32,
    id: 22,
  },
  {
    campus: Campus.OIC,
    datetimeToEnd: new Date(2024, 3, 4, 12, 11),
    datetimeToStart: new Date(2024, 3, 4, 12, 1),
    eventKind: EventKind.STAGE,
    eventName: '競技ダンス部',
    groupId: 185,
    id: 20,
  },
  {
    campus: Campus.OIC,
    datetimeToEnd: new Date(2024, 3, 4, 12, 27),
    datetimeToStart: new Date(2024, 3, 4, 12, 17),
    eventKind: EventKind.STAGE,
    eventName: 'BLENDERS',
    groupId: 169,
    id: 21,
  },
];

export type { StageInfoType };
export default stageInfoData;
