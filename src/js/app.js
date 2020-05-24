/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable-next-line array-callback-return */
/* eslint-disable guard-for-in */
export default function orderByProps(obj, order) {
  const newOrderArray = [];
  const newArray = [];
  for (const object in obj) {
    newArray.push({
      key: `${object}`,
      value: `${obj[object]}`,
    });
  }

  for (let i = 0; i < order.length; i++) {
    if (order[i] in obj) {
      newOrderArray.push({
        key: order[i],
        value: `${obj[order[i]]}`,
      });
    }
    for (let x = 0; x < newArray.length; x++) {
      if (newArray[x].key === order[i]) {
        newArray.splice(newArray.indexOf(newArray[x]), 1)
      }
    }
  }

  newArray.sort((a, b) => {
    if (a.key < b.key) return -1;
    if (a.key > b.key) return 1;
  });


    

  for (let i = 0; i < newArray.length; i++) {
    newOrderArray.push(newArray[i]);
  }

  return newOrderArray;
}
// orderByProps({
//   name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
// }, ['name', 'level']);
