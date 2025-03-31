function formatDate(start: Date, end: Date): string {
  // パディング関数: 値が一桁の場合は先頭に0を付けて二桁にする
  const pad = (num: number) => num.toString().padStart(2, '0');

  // startとendから年、月、日、時間、分を取得
  const startMonth = pad(start.getMonth()); // 月は0から始まるので+1
  const startDay = pad(start.getDate());
  const startHours = pad(start.getHours());
  const startMinutes = pad(start.getMinutes());

  const endHours = pad(end.getHours());
  const endMinutes = pad(end.getMinutes());

  // 曜日を数値で取得 (0=日曜日, 6=土曜日)
  const dayOfWeekNumber = start.getDay();

  // 数値を曜日の名前にマッピング
  const daysOfWeek = ['日', '月', '火', '水', '木', '金', '土'];
  const dayOfWeekName = daysOfWeek[dayOfWeekNumber];

  // 指定されたフォーマットで日時を整形
  const formattedDate = `${startMonth}/${startDay} (${dayOfWeekName}) ${startHours}:${startMinutes}〜${endHours}:${endMinutes}`;

  return formattedDate;
}

export default formatDate;
