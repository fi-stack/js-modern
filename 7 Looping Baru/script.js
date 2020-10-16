// for..of
// const mhs = ["Rafi", "Doddy", "Erik"];

// for (let i = 0; i < mhs.length; i++) {
//   console.log(mhs[i]);
// }

// mhs.forEach((m) => console.log(m));

// for (const m of mhs) {
//   console.log(m);
// }

// String
// const nama = "Rafi";
// for (const n of nama) {
//   console.log(n);
// }

// const mhs = ["Rafi", "Doddy", "Erik"];
// mhs.forEach((m, i) => console.log(`${m} adalah mahasiswa ke-${i + 1}`));

// for (const [i, m] of mhs.entries()) {
//   console.log(`${m} adalah mahasiswa ke-${i + 1}`);
// }

// NodeList
// const liNama = document.querySelectorAll(".nama");

// liNama.forEach((n) => console.log(n.textContent));
// for (n of liNama) {
//   console.log(n.innerHTML);
// }

// arguments
// function jumlahkanAngka() {
//   let jumlah = 0;
//   for (a of arguments) {
//     jumlah += a;
//   }
//   return jumlah;
// }

// console.log(jumlahkanAngka(1, 2, 3, 4, 5));

// for..in
const mhs = {
  nama: "Rafi",
  umur: 22,
  email: "rafi@gmail.com",
};

for (m in mhs) {
  console.log(mhs[m]);
}
