// 2.1 EXECUTION CONTEXT, HOISTING, & SCOPE

// console.log(nama);
// var nama = "Rafi";

// creation phase pada GLobal Context
// nama var = undefined
// nama function = fn()
// hoisting
// window = global object
// this = window

// execution phase

// console.log(sayHello());
// var nama = "Rafi";
// var umur = 23;

// function sayHello() {
//   return `Halo, nama saya ${nama}, usia saya ${umur} tahun`;
// }

// function membuat Local Execution Context
// yang di dalamnya terdapat creation dan execution phase
// window
// arguments
// hoisting

// var nama = "Rafi";
// var username = "@rafi_n_o";

// function cetakURL() {
//   console.log(arguments);
//   var instagramURL = "http://instagram.com/";
//   return instagramURL + username;
// }

// console.log(cetakURL("@doddy"));

// function a() {
//   console.log("ini a");

//   function b() {
//     console.log("ini b");

//     function c() {
//       console.log("ini c");
//     }
//     c();
//   }
//   b();
// }
// a();

function satu() {
  var nama = "Rafi";
  console.log(nama);
}

function dua() {
  console.log(nama);
}

console.log(nama);
var nama = "Erik";
satu();
dua("Doddy");
console.log(nama);

// satu()
// dua()
// nama -> undefined
// - undefined
// nama -> erik
// - rafi
// - erik
// - erik
