const XLSX = require('xlsx');

function readExcelFile(filePath) {
  const workbook = XLSX.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

  // Skip the header row
  const data = jsonData
    .slice(1)
    .filter((row) => row[0] <= 361)
    .map((row) => {
      return {
        areaClassification: row[4] ? row[4].toString() : undefined,
        areaNum: Number(row[3]),
        availability: {
          '4/3': row[6] === '◯',
          '4/4': row[7] === '◯',
        },
        campusId: Number(row[1]),
        eventKindId: Number(row[2]),
        groupId: Number(row[5]),
        id: Number(row[0]),
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
