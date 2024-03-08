const dataPenjualanNovel = [
  {
    idProduct: "BOOK002421",
    namaProduk: "Pulang - Pergi",
    penulis: "Tere Liye",
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: "BOOK002351",
    namaProduk: "Selamat Tinggal",
    penulis: "Tere Liye",
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Garis Waktu",
    penulis: "Fiersa Besari",
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

// fungsi untuk menhitung penjualan
function getInfoPenjualan(dataPenjualan) {
    // menghitung total keuntungan dengan (HJ - HB) * total terjual
    // menjumlahkan total keuntungan
  const totalKeuntungan = dataPenjualan
    .map((item) => (item.hargaJual - item.hargaBeli) * item.totalTerjual)
    .reduce(
      (totalKeuntungan, currentKeuntungan) =>
        totalKeuntungan + currentKeuntungan
    );

    // menghitung total modal (total stok)* harga beli

  const totalModal = dataPenjualan
    .map((item) => (item.totalTerjual + item.sisaStok) * item.hargaBeli)
    .reduce((totalModal, currentModal) => totalModal + currentModal);

    // menghitung persentase kentungan dari keuntungan/ pengeluaran *100%
  const persentaseKeuntungan =
    ((totalKeuntungan / totalModal) * 100).toFixed() + "%";

    // mencari produk terlaris dari total penjualan
  const produkBukuTerlaris = dataPenjualan.sort(
    (a, b) => b.totalTerjual - a.totalTerjual
  )[0].namaProduk;

//   mencari penulis terlaris dari akumulasi total terjual per buku
  const penulisTerlaris = dataPenjualan.reduce(
    (acc, { penulis, totalTerjual }) => {
      acc[penulis] = (acc[penulis] || 0) + totalTerjual;
      return acc;
    },
    {}
  );

  // mengambil nama penulis dan mencari dengan total penjualan terbanyak
  const namaPenulisTerlaris = Object.keys(penulisTerlaris)
  .reduce((a, b) =>
    penulisTerlaris[a] > penulisTerlaris[b] ? a : b
  );


  //formatter untuk uang
  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  const hasil = {
    totalKeuntungan: formatter.format(totalKeuntungan),
    totalModal: formatter.format(totalModal),
    persentaseKeuntungan: `${persentaseKeuntungan}`,
    bukuTerlaris: produkBukuTerlaris,
    penulisTerlaris: namaPenulisTerlaris,
  };

  return hasil;
}

console.log(getInfoPenjualan(dataPenjualanNovel));
