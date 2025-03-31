const path = require('path');
const { JSDOM } = require('jsdom');
const XLSX = require('xlsx');

function main() {
  const wb = XLSX.readFile('/Users/takayaman/Downloads/Book1.xlsx');
  const sheetNames = wb.SheetNames;

  console.log('シート名→' + sheetNames[0]);

  const sheet = wb.Sheets[sheetNames[0]];

  // シートの範囲を取得
  const range = XLSX.utils.decode_range(sheet['!ref']);

  // 最終行の番号を取得
  const lastRowNumber = range.e.r + 1; // Excelは1から始まるので+1する

  // console.log(`シート1のセルE23の値：\n${sheet['E23'].v}`)
  console.log('lastRowNumber:' + lastRowNumber);

  const groupList = [];

  // process
  for (let i = 2; i <= lastRowNumber; i++) {
    try {
      // Get the value of the cell
      const aCellValue = sheet['A' + i].v;
      const bCellValue = sheet['B' + i].v;
      const dCellValue = sheet['D' + i].v;
      const eCellValue = sheet['E' + i].v;
      const fCellValue = sheet['F' + i].v;

      const id = Number(aCellValue);
      const name = bCellValue;
      const belonging = toBelongingTypeNum(eCellValue);
      const category = toCategoryTypeNum(fCellValue);
      const campus = [];

      // キャンパスを取得する
      const campusDesc = extractCampusActivityContent(dCellValue);
      if (campusDesc.includes('BKC')) {
        campus.push(0);
      }
      if (campusDesc.includes('KIC')) {
        campus.push(1);
      }
      if (campusDesc.includes('OIC')) {
        campus.push(2);
      }
      if (campusDesc.includes('その他')) {
        campus.push(3);
      }

      const htmlData = dCellValue;
      const description = extractMessage(dCellValue);

      groupList.push({
        belonging: belonging,
        campus: campus,
        category: category,
        description: description,
        id: id,
        name: name,
      });
    } catch (e) {
      console.log(e);
    }
  }
  console.log('result ->');
  console.log(JSON.stringify(groupList));
}

function toCategoryTypeNum(str) {
  switch (str) {
    case '中央パート':
      return 0;
    case '中央事務局':
      return 1;
    case '中央事業団体':
      return 2;
    case '公認団体':
      return 3;
    case '同好会':
      return 4;
    case '登録団体':
      return 5;
    case '任意団体':
      return 6;
    default:
      console.log('out of rage');
      $exit();
  }
}

function toBelongingTypeNum(str) {
  switch (str) {
    case '中央パート':
      return 0;
    case '体育会':
      return 1;
    case '中央事務局':
      return 2;
    case '学術部':
      return 3;
    case '学芸総部':
      return 4;
    default:
      console.log('out of rage');
      console.log(str);
      $exit();
  }
}

function extractMessage(htmlContent) {
  // JSDOMを使用してHTMLコンテンツを解析
  const dom = new JSDOM(htmlContent);
  const doc = dom.window.document;

  // <h4>要素を全て取得
  const h4Elements = doc.querySelectorAll('h4');
  let messageContent = '';

  // '活動キャンパス'の直後の内容を検索
  h4Elements.forEach((elem, index) => {
    if (elem.textContent.trim() === 'メッセージ') {
      // 次の<h4>要素までの内容を抽出
      let content = '';
      let nextElem = elem.nextSibling;
      while (nextElem && nextElem.nodeName !== 'H4') {
        if (
          nextElem.nodeType === dom.window.Node.TEXT_NODE ||
          nextElem.nodeType === dom.window.Node.ELEMENT_NODE
        ) {
          content += nextElem.textContent.trim();
        }
        nextElem = nextElem.nextSibling;
      }
      messageContent = content;
    }
  });

  return messageContent;
}

function extractCampusActivityContent(htmlContent) {
  // JSDOMを使用してHTMLコンテンツを解析
  const dom = new JSDOM(htmlContent);
  const doc = dom.window.document;

  // <h4>要素を全て取得
  const h4Elements = doc.querySelectorAll('h4');
  let campusActivityContent = '';

  // '活動キャンパス'の直後の内容を検索
  h4Elements.forEach((elem, index) => {
    if (elem.textContent.trim() === '活動キャンパス') {
      // 次の<h4>要素までの内容を抽出
      let content = '';
      let nextElem = elem.nextSibling;
      while (nextElem && nextElem.nodeName !== 'H4') {
        if (
          nextElem.nodeType === dom.window.Node.TEXT_NODE ||
          nextElem.nodeType === dom.window.Node.ELEMENT_NODE
        ) {
          content += nextElem.textContent.trim();
        }
        nextElem = nextElem.nextSibling;
      }
      campusActivityContent = content;
    }
  });

  return campusActivityContent;
}
main();
