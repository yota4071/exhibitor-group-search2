import bodyStyle from '@/common/styles/body.css';
import groupPanelType from '@/common/type/groupPanelType';
import DummyGroupPanel from '@/components/DummyGroupPanel';
import GroupPanel from '@/components/GroupPanel';

const GroupList = ({
  targetGroupPanelsData,
  isPc,
}: {
  isPc: boolean;
  targetGroupPanelsData: groupPanelType[];
}) => {
  return (
    <>
      <div className={isPc ? bodyStyle.groupListWrapperForPc : bodyStyle.groupListWrapperForMobile}>
        {targetGroupPanelsData.map((groupPanelData, index) => (
          <GroupPanel groupPanelData={groupPanelData} key={`groupPanel-${index}`} />
        ))}
        {targetGroupPanelsData.length % 2 == 1 && <DummyGroupPanel />}
      </div>
    </>
  );
};

export default GroupList;
