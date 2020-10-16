// HTML Fragments
// const mhs = {
//   nama: "Rafi",
//   umur: 22,
//   nim: "1101154125",
//   email: "rafi@gmail.com",
// };

// const el = `<div class="mhs">
//   <h2>${mhs.nama}</h2>
//   <span class="nim">${mhs.nim}</span>
// </div>`;

// document.body.innerHTML = el;

// 2. Looping
// const mhs = [
//   {
//     nama: "Rafi",
//     email: "rafi@gmail.com",
//   },
//   {
//     nama: "Doddy",
//     email: "doddy@gmail.com",
//   },
//   {
//     nama: "Erik",
//     email: "erik@gmail.com",
//   },
// ];

// const el = `<div class="mhs">
// ${mhs
//   .map(
//     (m) => `<ul>
//     <li>${m.nama}</li>
//     <li>${m.email}</li>
//   </ul>`
//   )
//   .join("")}
// </div>`;

// document.body.innerHTML = el;

// 3. Conditionals
// ternary
// const lagu = {
//   judul: "Tetap Dalam Jiwa",
//   penyanyi: "Isyana Sarasvati",
// };

// const el = `<div class="lagu">
//   <ul>
//     <li>${lagu.penyanyi}</li>
//     <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ""}</li>
//   </ul>
// </div>`;

// document.body.innerHTML = el;

// 4. Nested
// HTML Fragments bersarang
// const mhs = {
//   nama: "Rafi",
//   semester: 5,
//   mataKuliah: [
//     "Rekayasa Web",
//     "Analisis dan Perancangan Sistem Informasi",
//     "Pemrograman Sistem Interaktif",
//     "Perancangan Sistem Berorientasi Object",
//   ],
// };

// function cetakMataKuliah(mataKuliah) {
//   return `<ol>
//   ${mataKuliah.map((mk) => `<li>${mk}</li>`).join("")}
//   </ol>`;
// }

// const el = `<div class="mhs">
//   <h2>${mhs.nama}</h2>
//   <span class="semester">Semester : ${mhs.semester}</span>
//   <h4>Mata Kuliah :</h4>
//   ${cetakMataKuliah(mhs.mataKuliah)}
// </div>`;

// document.body.innerHTML = el;
