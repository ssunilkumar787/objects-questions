document.querySelector('#app').innerHTML = `
  <div>
     Hello Objects
  </div>
`;

// const func = (function (a) {
//   delete a;
//   return a;
// })(5);

// console.log(func);

// const user = {
//   name: 'Sunil',
//   age: 24,
// };

// for (key in user) {
//   console.log(user[key]);
// }

// const obj = {
//   a: 'one',
//   b: 'two',
//   a: 'three',
// };

// console.log(obj);

// const obj = {
//   a: 400,
//   b: 800,
//   title: 'My nums',
// };

// function Mul(obj) {
//   for (key in obj) {
//     if (typeof obj[key] === 'number') {
//       obj[key] = obj[key] * 2;
//     }
//   }
// }

// Mul(obj);

// console.log(obj);

// const a = {};
// const b = {key: 'b'}
// const c = {key: 'c'}

// a[b] = 123;

// a[c] = 456

// console.log(a[b])

const obj = {
  name: 'sunil',
  age: 25,
};

const strObj = JSON.stringify(obj);

localStorage.setItem('test', strObj);

console.log('test', localStorage.getItem('test'));

const conObj = JSON.parse(strObj);

console.log(strObj, conObj);
