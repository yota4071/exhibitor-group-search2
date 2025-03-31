import { CampusType } from '@/common/type/campusType';
import { EventKindType } from '@/common/type/eventKindType';

type ExhibitInfoType = {
  campus: CampusType;
  description: BoothDescType | StageDescType | GroupProjectDescType;
  eventKind: EventKindType;
  groupId: number;
  id: number;
};

type BoothDescType = {
  areaNum: number;
  exhibitDate: Date[];
};

type StageDescType = {
  datetimeToEnd: Date;
  datetimeToStart: Date;
};

type GroupProjectDescType = {
  datetimeToEnd: Date;
  datetimeToStart: Date;
  location: string;
};

export default ExhibitInfoType;
export type { BoothDescType, StageDescType, GroupProjectDescType };
