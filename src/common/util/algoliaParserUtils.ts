import initGroupData from '../../../public/groupData.json';
import GroupPanelType from '@/common/type/groupPanelType';
import GroupType from '@/common/type/groupType';

type SearchedResultType = {
  groupId: number;
  matchedText: {
    campus: string | null;
    description: string | null;
    name: string | null;
  };
};

const algoliaParse = (hitsResult: any[]): SearchedResultType[] => {
  const parsedSearchedResult: SearchedResultType[] = [];
  if (hitsResult.length !== 0) {
    for (const hitElement of hitsResult) {
      let hitNameStr: string | null = null;
      let hitCampusStr: string | null = null;
      let hitDescriptionStr: string | null = null;

      // nameが一致しているかをチェック
      if (
        hitElement['_highlightResult']['name']['matchLevel'] === 'full' ||
        hitElement['_highlightResult']['name']['matchLevel'] === 'partial'
      ) {
        hitNameStr = hitElement['_highlightResult']['name']['value'];
      }
      // campusが一致しているかをチェック
      if (
        hitElement['_highlightResult']['campus']['matchLevel'] === 'full' ||
        hitElement['_highlightResult']['campus']['matchLevel'] === 'partial'
      ) {
        hitCampusStr = hitElement['_highlightResult']['campus']['value'];
      }
      // descriptionが一致しているかをチェック
      if (
        hitElement['_highlightResult']['description']['matchLevel'] === 'full' ||
        hitElement['_highlightResult']['description']['matchLevel'] === 'partial'
      ) {
        hitDescriptionStr = hitElement['_highlightResult']['description']['value'];
      }

      parsedSearchedResult.push({
        groupId: hitElement['id'],
        matchedText: {
          campus: hitCampusStr ? hitCampusStr : null,
          description: hitDescriptionStr ? hitDescriptionStr : null,
          name: hitNameStr ? hitNameStr : null,
        },
      });
    }
  }
  console.log(JSON.stringify(parsedSearchedResult));
  return parsedSearchedResult;
};

const expandToGroupBySearchResponse = (hitsResult: any[]): GroupPanelType[] => {
  const initData: GroupType[] = initGroupData as GroupType[];

  const parsedResultGroups = algoliaParse(hitsResult);
  const resultGroupsPanel: GroupPanelType[] = [];
  for (let parsedResultGroup of parsedResultGroups) {
    const targetGroup = initData.find((element) => parsedResultGroup.groupId == element.id);
    if (targetGroup) {
      resultGroupsPanel.push({
        group: targetGroup,
        matchedText: parsedResultGroup.matchedText,
      });
    } else {
      console.error('Specified id is not found -> id:' + parsedResultGroup.groupId);
    }
  }
  console.log(JSON.stringify(resultGroupsPanel));
  return resultGroupsPanel;
};

export { expandToGroupBySearchResponse };
