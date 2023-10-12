/*
  У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType. 
  Ваше завдання – використовувати Pick та generics для вказівки, що поля цих об'єктів належать AllType.
  Функція compare повинна повертати AllType.
*/

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number
};

function compare<T extends AllType>(top: Pick<T, keyof AllType>, bottom: Pick<T, keyof AllType>): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  }
};

// Пример
const topObj: AllType = {
  name: 'VVV',
  position: 1,
  color: 'Black',
  weight: 5,
};

const bottomObj: AllType = {
  name: 'BBB',
  position: 2,
  color: 'Red',
  weight: 7,
};

const total: AllType = compare(topObj, bottomObj);
console.log(total);

export {};