import GroupType from '@/common/type/groupType';

type GroupPanelType = {
  group: GroupType;
  matchedText: {
    campus: string | null;
    description: string | null;
    name: string | null;
  };
};

export default GroupPanelType;
