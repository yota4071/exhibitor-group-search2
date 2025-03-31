/* eslint-disable sort-keys-fix/sort-keys-fix */
const GroupCategory = {
  CENTER_PART: 0, // 中央パート
  CENTRAL_SECRETARIAT: 1, // 中央事務局
  CENTRAL_PROJECT_GROUP: 2, // 中央事業団体
  AUTHORIZED_GROUP: 3, // 公認団体
  INTEREST_GROUP: 4, // 同好会
  REGISTERED_GROUP: 5, // 登録団体
  PRIVATE_GROUP: 6, // 任意団体
  PROJECT_ORGANIZATION: 7, // プロジェクト団体
  OTHER_UNIVERSITY_AUTHORITY_GROUP: 8, // その他大学が公認する団体
  UNKNOWN: 9, //不明
} as const;

// 0 | 2 | 3 | 4 | 5 | 6 | 7 |8
type GroupCategoryType = (typeof GroupCategory)[keyof typeof GroupCategory];

function toGroupCategoryName(groupCategory: GroupCategoryType): string {
  switch (groupCategory) {
    case GroupCategory.CENTER_PART:
      return '中央パート';
    case GroupCategory.CENTRAL_SECRETARIAT:
      return '中央事務局';
    case GroupCategory.CENTRAL_PROJECT_GROUP:
      return '中央事業団体';
    case GroupCategory.AUTHORIZED_GROUP:
      return '公認団体';
    case GroupCategory.INTEREST_GROUP:
      return '同好会';
    case GroupCategory.REGISTERED_GROUP:
      return '登録団体';
    case GroupCategory.PRIVATE_GROUP:
      return '任意団体';
    case GroupCategory.PROJECT_ORGANIZATION:
      return 'プロジェクト団体';
    case GroupCategory.OTHER_UNIVERSITY_AUTHORITY_GROUP:
      return 'その他大学が公認する団体';
    case GroupCategory.UNKNOWN:
      return '不明';
  }
}

export { GroupCategory, toGroupCategoryName };
export default GroupCategoryType;
