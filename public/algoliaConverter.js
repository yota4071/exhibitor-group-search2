function main() {
  const result = [];

  const data = require('./algoliaData.json');

  for (let i = 0; i < data.length; i++) {
    if (data[i].id >= 343) {
      result.push({
        belonging: toGroupBelongingName(data[i].belonging),
        campus: toCampusContent(data[i].campus),
        category: toGroupCategoryName(data[i].category),
        description: data[i].description,
        id: data[i].id,
        name: data[i].name,
      });
    }
  }

  console.log(JSON.stringify(result));
}

function toGroupBelongingName(groupBelonging) {
  switch (groupBelonging) {
    case 0:
      return '中央パート';
    case 1:
      return '体育会';
    case 2:
      return '中央事務局';
    case 3:
      return '学術部';
    case 4:
      return '学芸総部';
    case 5:
      return '大学が公認している団体';
    case 6:
      return '不明';
  }
}

function toGroupCategoryName(groupCategory) {
  switch (groupCategory) {
    case 0:
      return '中央パート';
    case 1:
      return '中央事務局';
    case 2:
      return '中央事業団体';
    case 3:
      return '公認団体';
    case 4:
      return '同好会';
    case 5:
      return '登録団体';
    case 6:
      return '任意団体';
    case 7:
      return 'プロジェクト団体';
    case 8:
      return 'その他大学が公認する団体';
    case 9:
      return '不明';
  }
}

function toCampusContent(campus) {
  let returnStr = '';
  for (let i = 0; i < campus.length; i++) {
    returnStr += toCampusName(campus[i]);
    if (i !== campus.length - 1) {
      returnStr += ', ';
    }
  }
  return returnStr;
}

function toCampusName(campus) {
  switch (campus) {
    case 0:
      return 'BKC';
    case 1:
      return '衣笠';
    case 2:
      return 'OIC';
    case 3:
      return 'オンライン・学外';
  }
}

main();
