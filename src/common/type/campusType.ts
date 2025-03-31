const Campus = {
  BKC: 0,
  KIC: 1,
  OIC: 2,
  OTHERS: 3,
} as const;

// 0 | 1 | 2
type CampusType = (typeof Campus)[keyof typeof Campus];

function toCampusName(campus: CampusType): string {
  switch (campus) {
    case Campus.BKC:
      return 'BKC';
    case Campus.KIC:
      return '衣笠';
    case Campus.OIC:
      return 'OIC';
    case Campus.OTHERS:
      return 'オンライン・学外';
  }
}

const toCampusContent = (campus: CampusType[]): string => {
  let returnStr = '';
  for (let i = 0; i < campus.length; i++) {
    returnStr += toCampusName(campus[i]);
    if (i != campus.length - 1) {
      returnStr += ', ';
    }
  }
  return returnStr;
};

export { Campus, toCampusName, toCampusContent };
export type { CampusType };
