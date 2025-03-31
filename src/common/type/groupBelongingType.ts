/* eslint-disable sort-keys-fix/sort-keys-fix */
const GroupBelonging = {
  CENTER_PART: 0, // 中央パート
  ATHLETIC_MEET: 1, // 体育会
  CENTRAL_SECRETARIAT: 2, // 中央事務局
  ACADEMIC_DEPARTMENT: 3, // 学術部
  GENERAL_EDUCATION_DEPARTMENT: 4, // 学芸総部
  UNIVERSITY_AUTHORITY: 5, // 大学公認
  UNKNOWN: 6, // 不明
} as const;

// 0 | 1 | 2 | 3
type GroupBelongingType = (typeof GroupBelonging)[keyof typeof GroupBelonging];

function toGroupBelongingName(groupBelonging: GroupBelongingType): string {
  switch (groupBelonging) {
    case GroupBelonging.CENTER_PART:
      return '中央パート';
    case GroupBelonging.ATHLETIC_MEET:
      return '体育会';
    case GroupBelonging.CENTRAL_SECRETARIAT:
      return '中央事務局';
    case GroupBelonging.ACADEMIC_DEPARTMENT:
      return '学術部';
    case GroupBelonging.GENERAL_EDUCATION_DEPARTMENT:
      return '学芸総部';
    case GroupBelonging.UNIVERSITY_AUTHORITY:
      return '大学が公認している団体';
    case GroupBelonging.UNKNOWN:
      return '不明';
  }
}

function toEnglishDirectoryName(groupBelonging: GroupBelongingType): string {
  switch (groupBelonging) {
    case GroupBelonging.CENTER_PART:
      return 'centralPart';
    case GroupBelonging.ATHLETIC_MEET:
      return 'athleticMeet';
    case GroupBelonging.CENTRAL_SECRETARIAT:
      return 'centralSecretariat';
    case GroupBelonging.ACADEMIC_DEPARTMENT:
      return 'academicDepartment';
    case GroupBelonging.GENERAL_EDUCATION_DEPARTMENT:
      return 'generalEducationDepartment';
    case GroupBelonging.UNIVERSITY_AUTHORITY:
      return 'universityAuthority';
    case GroupBelonging.UNKNOWN:
      return 'unknown';
  }
}

export { GroupBelonging, toGroupBelongingName, toEnglishDirectoryName };
export default GroupBelongingType;
