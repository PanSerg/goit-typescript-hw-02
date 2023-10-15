/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

function merge<T extends object, U extends object> (objA: T, objB: U): T & U {
  return Object.assign({}, objA, objB);
};

const obj1 = { name: 'Serhii' };
const obj2 = { age: 40 };

const merged = merge(obj1, obj2);
console.log(merged);

export {}