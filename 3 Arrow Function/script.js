// Function Expression
// let tampilPesan = function (nama) {
//   return `Halo, ${nama}`;
// };

// console.log(tampilPesan("Rafi"));

// implisit return
// const tampilNama = (nama) => `Halo, ${nama}`;
// console.log(tampilNama("Rafi"));

// const tampilNama = () => `Hello, Rafi!`;
// console.log(tampilNama());

// const tampilNama = (nama, waktu) => {
//   return `Selamat ${waktu}, ${nama}`;
// };
// console.log(tampilNama("Erik", "Malam"));

let mahasiswa = ["Rafi Nur Oktafian", "Doddy Ferdiansyah", "Erik"];
// let jumlahHuruf = mahasiswa.map(function (nama) {
//   return nama.length;
// });
// console.log(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map((nama) => nama.length);
// console.log(jumlahHuruf);

let jumlahHuruf = mahasiswa.map((nama) => ({
  nama,
  jmlHuruf: nama.length,
}));
console.log(jumlahHuruf);
