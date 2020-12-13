// アロー関数
const hello = name => console.log('hello' + name);

const hello = (name,age) => {
    console.log('hello' + name)
    console.log('hello' + age)
}

// 実用的なアロー関数

const arry = [1,2,3,4,5,6];
arry.forEach(value => console.log(value));
