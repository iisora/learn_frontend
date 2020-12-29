function hello(name, age) {
    console.log('hello' + name + age);
    return name + age;
}

/* 無名関数を変数に代入している例 */
/* この場合は、間数の実行より前にする必要がある　*/
const hello2 = function(name, age) {
    console.log('久しぶりー ' + name + age)
    return name + age;
}


hello('iisora', 25);
const returnVal = hello('namuami', 22);
console.log(returnVal);