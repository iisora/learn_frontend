/* javascriptでは色んな型のデータを一つの配列に持つことができる */
const arry = [1,2,3,4,5,'moji',false];
console.log(arry[5]);
console.log(arry.length);
/* 末尾 */
arry.push('new item');
/* 先頭 */
arry.unshift('unshift');
/* 末尾を削除 */
const val = arry.pop();
/* 先頭を削除 */
const val2 = arry.shift();
console.log(arry);
console.log(val);
console.log(val2);