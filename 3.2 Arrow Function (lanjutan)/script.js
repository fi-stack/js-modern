// Konsep this pada arrow function

// constructor function
// const Mahasiswa = function () {
//   this.nama = "Rafi";
//   this.umur = 22;
//   this.sayHello = function () {
//     console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//   };
// };
// const rafi = new Mahasiswa();

// Arrow Function
// const Mahasiswa = function () {
//   this.nama = "Rafi";
//   this.umur = 22;
//   this.sayHello = () => {
//     console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//   };
// };
// const rafi = new Mahasiswa();

// Object Literal
// const mhs1 = {
//   nama: "Rafi",
//   umur: 22,
//   sayHello: () => {
//     // console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//     console.log(this);
//   },
// };

// const Mahasiswa = function () {
//   this.nama = "Rafi";
//   this.umur = 22;
//   this.sayHello = function () {
//     console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//   };
//   setInterval(() => {
//     console.log(this.umur++);
//   }, 500);
// };
// const rafi = new Mahasiswa();

const box = document.querySelector(".box");
box.addEventListener("click", function () {
  let satu = "size";
  let dua = "caption";
  if (this.classList.contains(satu)) {
    [satu, dua] = [dua, satu];
  }
  this.classList.toggle(satu);
  setTimeout(() => {
    this.classList.toggle(dua);
    console.log(this);
  }, 600);
});
