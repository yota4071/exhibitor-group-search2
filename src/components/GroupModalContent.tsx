import Image from 'next/image';
import styleConstant from '@/common/constant/styleConstant';
import groupPanelStyle from '@/common/styles/groupPanel.css';
import { toCampusContent } from '@/common/type/campusType';
import { toGroupBelongingName } from '@/common/type/groupBelongingType';
import { toGroupCategoryName } from '@/common/type/groupCategoryType';
import GroupType from '@/common/type/groupType';
import ExhibitionInfoContent from '@/components/ExhibitionInfoContent';

const ModalContent = ({ title, content }: { content: string; title: string }) => (
  <div style={{ marginBottom: '1em' }}>
    <h1 className={groupPanelStyle.mainHeader}>{title}</h1>
    <p>{content}</p>
  </div>
);

const GroupModalContent = ({ group, imagePath }: { group: GroupType; imagePath: string }) => {
  return (
    <div>
      <div
        style={{
          borderRadius: `${styleConstant.BORDER_RADIUS_PX}px`,
          marginBottom: '1em',
          overflow: 'hidden',
          width: '100%',
        }}
      >
        <Image
          src={imagePath}
          alt={`image of "${group.name}"`}
          width={styleConstant.MODAL_WIDTH_PX}
          height={styleConstant.MODAL_WIDTH_PX}
          style={{ objectFit: 'cover' }}
        />
      </div>
      <ModalContent title={'団体名'} content={group.name} />
      <ModalContent title={'所属'} content={toGroupBelongingName(group.belonging)} />
      <ModalContent title={'団体分類'} content={toGroupCategoryName(group.category)} />
      <ModalContent title={'活動場所'} content={toCampusContent(group.campus)} />
      <ModalContent title={'活動紹介'} content={group.description} />
      <ExhibitionInfoContent groupId={group.id} />
    </div>
  );
};

export default GroupModalContent;
