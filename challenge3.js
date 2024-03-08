function getAngkaTerbesarKedua(dataAngka) {
  // validasi untuk input yang salah
  if (!Array.isArray(dataAngka)) {
    return "ERROR: Bukan dalam bentuk input array";
  } else if (!dataAngka.length || dataAngka.length === 0) {
    return "ERROR: Array kosong";
  }

  //  melkakukan  filtering untuk angka yang berulang
  const tempArray = dataAngka.filter(
    (value, index) => dataAngka.indexOf(value) === index
  );

  // kalau angkanya hanya 1 mereturn angka tersbut
  if (tempArray.length === 1) {
    return tempArray[0];
  }

  // sorted array yang udah dikumpulkan
  const sortArray = tempArray.sort((a, b) => b - a);

  // ambil indeks terbesar kedua
  return sortArray[1];
}

const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];

console.log(getAngkaTerbesarKedua(dataAngka));
console.log(getAngkaTerbesarKedua(0));
console.log(getAngkaTerbesarKedua());
