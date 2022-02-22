'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// const minMax = function (...numbs) {
//   const min = Math.min(...numbs);
//   const max = Math.max(...numbs);
//   console.log(`Min: ${min}, Max: ${max}`);
// };
// minMax(1, 2, 3, 4, 5);

// const func = function (...numbers) {
//   const devided = [];
//   const notDevided = [];
//   for (let i = 0; i <= numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//       devided.push(numbers[i]);
//     } else {
//       notDevided.push(numbers[i]);
//     }
//   }
//   console.log(`Devided: ${devided} ,not Devided: ${notDevided}`);
// };
// func(1, 2, 3, 4, 5);

// const reverse = function (...numbs) {
//   const reversed = numbs.reverse();
//   console.log(reversed);
// };
// reverse(1, 2, 3, 4, 5);

// const max = function (big, small) {
//   const check = big > small ? big : small;
//   console.log(check);
// };
// max(2, 3);

// const checkSpeed = function (speed) {
//   const point = Math.floor((speed - 70) / 5);
//   if (point < 12) console.log(point);
//   else console.log('Guvohnoma olib qoyiladi');
// };
// checkSpeed(135);

const sum = function (limit) {
  let sumAll = 0;
  for (let i = 0; i <= limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) sumAll += i;
  }
  return sumAll;
};
console.log(sum(10));

let car = {
  model: 'Toyota',
  make: 'Estima',
  year: 2016,
  price: 5000,
};
const showProp = function (obj) {
  for (const i of Object.values(obj)) {
    if (typeof i === 'string') {
      console.log(i);
    }
  }
};
showProp(car);
