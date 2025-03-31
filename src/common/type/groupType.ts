import { CampusType } from '@/common/type/campusType';
import GroupBelongingType from '@/common/type/groupBelongingType';
import GroupCategoryType from '@/common/type/groupCategoryType';

type GroupType = {
  belonging: GroupBelongingType;
  campus: CampusType[];
  category: GroupCategoryType;
  description: string;
  htmlData: string;
  id: number;
  name: string;
};

export default GroupType;
