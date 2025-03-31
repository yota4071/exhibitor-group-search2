const XLSX = require('xlsx');

function readExcelFile(filePath) {
  const workbook = XLSX.readFile(filePath);
  const sheetName = workbook.SheetNames[1];
  const worksheet = workbook.Sheets[sheetName];
  const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

  // Skip the header row
  const data = jsonData
    .slice(1)
    .filter((row) => row[0] <= 72)
    .map((row) => {
      let dateDesc = '';

      if (row[7] === undefined || row[7] === null) {
        dateDesc = row[6].toString();
      } else {
        dateDesc = row[6].toString() + '\n' + row[7].toString();
      }

      return {
        areaDesc: String(row[5] ? row[5].toString() : undefined),
        campusId: Number(row[1]),
        dateDesc: dateDesc,
        eventKindId: Number(row[2]),
        eventName: String(row[4].toString()),
        groupId: Number(row[3]),
        id: Number(row[0]),
        projectContent: String(row[8].toString()),
      };
    });

  return data;
}

const filePath =
  '/Users/takayaman/Library/CloudStorage/OneDrive-学校法人立命館/Welcome Festival/団体検索アプリ/出展情報.xlsx';
const data = readExcelFile(filePath);
//console.log(data);

console.log(JSON.stringify(data));

module.exports = data;
