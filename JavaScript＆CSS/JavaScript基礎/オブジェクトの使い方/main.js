const person = {
    // property
    name: ['tarou', 'hime'],
    age: 32,
    gender: 'male',
    interests: {
        sports: 'tennis',
        music: 'piano'
    },
    // method
    getFullName: function() {
        console.log(this.name[0] + this.name[1])
    }
};
person.age = 22;
const ageKey = 'age';
/* キー情報が動的に変わる場合は、ブラケットを使う */
person[ageKey] = 12;

console.log(person.age)

person.getFullName();

const s = 'hello world';

s.toUpperCase();

