// Destructuring Variabel / Assignment

// Destructuring Array
// const perkenalan = ["Halo", "nama", "saya", "Rafi Nur Oktafian"];

// const [salam, satu, dua, nama] = perkenalan;

// skipping items
// const [salam, , , nama] = perkenalan;
// console.log(salam);
// console.log(nama);

// swap items
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// return value pada function
// function coba() {
//   return [1, 2];
// }

// const [a, b] = coba();
// console.log(a);
// console.log(b);

// Rest parameter
// const [a, ...values] = [1, 2, 3, 4, 5];
// console.log(values);

// Destructuring Object
// const mhs = {
//   nama: "Rafi",
//   umur: 22,
// };

// const { nama, umur } = mhs;
// console.log(nama);

// Assignment tanpa deklarasi object
// ({ nama, umur } = {
//   nama: "Rafi",
//   umur: 22,
// });

// console.log(umur);

// Assign ke variabel baru
// const mhs = {
//   nama: "Rafi",
//   umur: 22,
// };

// const { nama: n, umur: u } = mhs;
// console.log(n);

// Memberikan Default Value
// const mhs = {
//   nama: "Rafi",
//   umur: 22,
//   email: "rafi@gmail.com",
// };

// const { nama, umur, email = "email@default.com" } = mhs;
// console.log(email);

// Memberi nilai default + assign ke variabel baru
// const mhs = {
//   nama: "Rafi",
//   umur: 22,
//   email: "rafi@gmail.com",
// };

// const { nama: n, umur: u, email: e = "email@default.com" } = mhs;
// console.log(e);

// Rest Parameter
// const mhs = {
//   nama: "Rafi",
//   umur: 22,
//   email: "rafi@gmail.com",
// };

// const { nama, ...values } = mhs;
// console.log(values);

// Mengambil field pada object, setelah dikirim sebagai parameter untuk function
const mhs = {
  id: 123,
  nama: "Rafi",
  umur: 22,
  email: "rafi@gmail.com",
};

function getIdMhs({ id, nama }) {
  return id;
}

console.log(getIdMhs(mhs));
