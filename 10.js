
// UTC時間の現在時刻
const now = new Date();
console.log(now);

// 月は0～11のインデックスを指定する
// 時間はローカル⇒UTCに変更される
// 1995,7,24⇒1995-08(7番目)-23(24日0:00-9:00)⇒1995-08-23 15:00
const win95Launch = new Date(1995,7,24);
console.log(win95Launch);

// 1969,11,11⇒1969-12-10-15:00
const myBirthDay = new Date(1969,11,11);
console.log(myBirthDay);

// 1月を設定
const demoDate = new Date();
demoDate.setMonth(0);
console.log(demoDate);

// 曜日は日曜始まり(0～6)
console.log(`Day of week: ${now.getDay()}`);
console.log(`Date: ${now.getDate()}`);

// ローカルタイム
console.log(`Local Time: ${now.toLocaleString('ja-JP')}`);

// 書式変更
console.log(new Intl.DateTimeFormat(`ja-JP`).format(now));

