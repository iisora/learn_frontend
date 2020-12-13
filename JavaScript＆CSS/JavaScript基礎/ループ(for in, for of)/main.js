const arry = [1, 2, 3, 4, 5, 6];

/* iに添字が渡ってくる */
for (let i in arry) {
    console.log(arry[i]);
}

/* vに値が渡ってくる */
for(let v of arry) {
    console.log(v);
}
