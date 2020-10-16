// function init() {
//   let nama = "Rafi"; // local variable
//   function tampilNama() {
//     // inner function (closure)
//     console.log(nama); // akses ke parent variable
//   }
//   tampilNama();
// }
// init();

// function init() {
//   return function (nama) {
//     console.log(nama);
//   };
// }
// let panggilNama = init();
// panggilNama("Rafi");
// panggilNama("Nur");

// function ucapkanSalam(waktu) {
//   return function (nama) {
//     console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan!`);
//   };
// }

// let selamatPagi = ucapkanSalam("Pagi");
// let selamatSiang = ucapkanSalam("Siang");
// let selamatMalam = ucapkanSalam("Malam");

// selamatPagi("Rafi");
// selamatMalam("Nur");

// console.dir(selamatMalam("rafi"));

let add = (function () {
  let counter = 0;
  return function () {
    return ++counter;
  };
})();

counter = 100;

console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
