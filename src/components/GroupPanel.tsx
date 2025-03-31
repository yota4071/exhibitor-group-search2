import { Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from '@nextui-org/modal';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styleConstant from '@/common/constant/styleConstant';
import groupPanelStyle from '@/common/styles/groupPanel.css';
import { toCampusContent } from '@/common/type/campusType';
import { toEnglishDirectoryName } from '@/common/type/groupBelongingType';
import GroupPanelType from '@/common/type/groupPanelType';
import GroupModalContent from '@/components/GroupModalContent';

const GroupPanel = ({ groupPanelData }: { groupPanelData: GroupPanelType }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [imagePath, setImagePath] = useState<string>('');

  useEffect(() => {
    setImagePath(
      `/groupImg/${toEnglishDirectoryName(groupPanelData.group.belonging)}/${groupPanelData.group.name.replace(/[ 　]/g, '')}.png`,
    );
  }, [groupPanelData]);

  const handleOnError = () => {
    console.error(`image for ${imagePath} is not found`);
    setImagePath('/notFound.png');
  };

  return (
    <>
      <div className={groupPanelStyle.basicStyle} onClick={onOpen}>
        <div className={groupPanelStyle.imgWrapper}>
          <Image
            src={imagePath}
            alt={`image of "${groupPanelData.group.name}"`}
            fill
            onError={handleOnError}
            style={{ objectFit: 'cover' }}
          />
        </div>

        <div className={groupPanelStyle.contentWrapper}>
          <div
            className={`${groupPanelStyle.groupNameWrapper} highlight`}
            dangerouslySetInnerHTML={{
              __html:
                groupPanelData.matchedText.name == null
                  ? groupPanelData.group.name
                  : groupPanelData.matchedText.name,
            }}
          />
          <div
            className={`${groupPanelStyle.campusWrapper} highlight`}
            dangerouslySetInnerHTML={{
              __html:
                groupPanelData.matchedText.campus == null
                  ? toCampusContent(groupPanelData.group.campus)
                  : groupPanelData.matchedText.campus,
            }}
          />
          <div
            className={`${groupPanelStyle.panelContent} highlight`}
            dangerouslySetInnerHTML={{
              __html:
                groupPanelData.matchedText.description == null
                  ? groupPanelData.group.description
                  : groupPanelData.matchedText.description,
            }}
          />
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        style={{ maxWidth: `${styleConstant.MODAL_WIDTH_PX}px` }}
        size={'xs'}
        placement={'center'}
        scrollBehavior={'inside'}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className='flex flex-col gap-1'>{`活動紹介`}</ModalHeader>
              <ModalBody>
                <GroupModalContent group={groupPanelData.group} imagePath={imagePath} />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default GroupPanel;
