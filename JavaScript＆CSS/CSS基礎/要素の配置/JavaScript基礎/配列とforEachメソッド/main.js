const arry = [1,2,3,4,5];

// 第一引数には配列の値が渡ってくる、第二：添字、第三：配列
arry.forEach(function(v, i, ary) {
    console.log(v);
});

/* 上を簡略化(アロー関数) */ 
/* 変数宣言が少なくなるので、バグを生む原因を少なくする */
arry.forEach(v => console.log(v));

/* 上と同じ結果 */
for(let i = 0; i < arry.length; i++) {
    const v = arry[i];
    console.log(v);
}

