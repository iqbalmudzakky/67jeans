let dataBase = [
  {
    product: "Celana Panjang",
    mainPhoto: "assets/img/cover-product/monarch.png",
    detailPhoto: "assets/img/detail-product/monarch-detail.png",
    guidePhoto: "assets/img/panduan-ukuran/monarch-size.png",
    title: "Monarch - Regular Fit Timeless Classic",
    deskripsiP1:
      "Monarch adalah varian jeans dengan potongan regular fit yang menghadirkan keseimbangan sempurna antara gaya klasik dan kenyamanan modern. Material denim tebal namun lentur menjadikannya awet, cocok dipakai untuk aktivitas sehari-hari maupun momen spesial. Tampilan fading lembut menambah kesan maskulin dan timeless.",
    deskripsiP2:
      "Sebagai bagian dari koleksi custom size 67 Jeans, Monarch dibuat mengikuti proporsi tubuhmu. Hasilnya, jeans yang tidak hanya enak dipakai, tapi juga membuat siluetmu terlihat lebih rapi dan percaya diri. Monarch adalah pilihan klasik yang tidak lekang oleh waktu, selalu relevan di setiap kesempatan.",
    pinggang: 88,
    pinggangMin: 50,
    pinggangMax: 150,
    "lingkar paha": 60,
    "lingkar paha min": 45,
    "lingkar paha max": 90,
    panjang: 78,
    panjangMin: 70,
    panjangMax: 115,
    harga: 100_000,
  },
  {
    product: "Celana Jogger",
    mainPhoto: "assets/img/cover-product/superego.png",
    detailPhoto: "assets/img/detail-product/superego-detail.png",
    guidePhoto: "assets/img/panduan-ukuran/superego-size.png",
    title: "SuperEgo - Premium Jogger Denim",
    deskripsiP1:
      "SuperEgo adalah jawaban untuk kamu yang ingin memadukan kenyamanan maksimal dengan gaya denim modern. Potongan jogger dengan ujung elastis memberi sentuhan kasual, sementara material denim stretch premium memastikan kamu tetap bebas bergerak sepanjang hari. Cocok dipakai untuk aktivitas santai hingga semi-formal, menjadikan SuperEgo pilihan ideal untuk gaya dinamis.",
    deskripsiP2:
      "Dengan layanan custom size, SuperEgo hadir menyesuaikan bentuk tubuhmu. Tidak kebesaran, tidak kesempitan—pas sempurna. Detail jahitan rapi dan desain yang versatile membuatnya bukan hanya jeans, tapi representasi gaya hidup praktis dan stylish.",
    pinggang: 88,
    pinggangMin: 50,
    pinggangMax: 150,
    "lingkar paha": 60,
    "lingkar paha min": 45,
    "lingkar paha max": 90,
    panjang: 78,
    panjangMin: 70,
    panjangMax: 115,
    harga: 150_000,
  },
  {
    product: "Celana Pendek",
    mainPhoto: "assets/img/cover-product/nomad.png",
    detailPhoto: "assets/img/detail-product/nomad-detail.png",
    guidePhoto: "assets/img/panduan-ukuran/nomad-size.png",
    title: "Nomad – Denim Shorts Casual Freedom",
    deskripsiP1:
      "Nomad dirancang untuk mereka yang aktif bergerak dan mencintai kebebasan. Potongan pendek memberi rasa ringan dan breathable, menjadikannya pilihan sempurna untuk cuaca tropis atau gaya santai sehari-hari. Warna biru klasik dengan detail fading natural menambah karakter tanpa kehilangan kesan rapi.",
    deskripsiP2:
      "Dengan sistem custom size, Nomad memastikan kenyamanan penuh di pinggang dan paha. Tidak ada lagi kompromi antara gaya dan kenyamanan. Nomad bukan hanya denim shorts, tapi simbol kebebasan berekspresi dengan jeans yang benar-benar dibuat untukmu.",
    pinggang: 88,
    pinggangMin: 50,
    pinggangMax: 150,
    "lingkar paha": 60,
    "lingkar paha min": 45,
    "lingkar paha max": 90,
    panjang: 50,
    panjangMin: 30,
    panjangMax: 78,
    harga: 85_000,
  },
];

let pinggang = 0;
let pinggangMin = 0;
let pinggangMax = 0;
let selisihPinggang = 0;

let paha = 0;
let pahaMin = 0;
let pahaMax = 0;
let selisihPaha = 0;

let panjang = 0;
let panjangMin = 0;
let panjangMax = 0;
let selisihPanjang = 0;

let basePrice = 0;
let totalPrice = 0;

// get element
let mainPhotoId = document.getElementById("main-photo");
let detailPhotoId = document.getElementById("detail-photo");
let guidePhotoId = document.getElementById("guide-photo");
let titleId = document.getElementById("title");
let deskripsiP1Id = document.getElementById("description-p1");
let deskripsiP2Id = document.getElementById("description-p2");

let pinggangInputId = document.getElementById("waist");
let pahaInputId = document.getElementById("thigh");
let panjangInputId = document.getElementById("length");
let qtyId = document.getElementById("quantity");
let priceId = document.getElementById("price");

// function to link navbar
function callMonarch() {
  // get data
  for (let i = 0; i < dataBase.length; i++) {
    let innerObj = dataBase[i];
    if (innerObj.product === "Celana Panjang") {
      mainPhotoId.src = innerObj.mainPhoto;
      detailPhotoId.src = innerObj.detailPhoto;
      guidePhotoId.src = innerObj.guidePhoto;
      titleId.innerText = innerObj.title;
      deskripsiP1Id.innerText = innerObj.deskripsiP1;
      deskripsiP2Id.innerText = innerObj.deskripsiP2;

      // reassign pinggang value
      pinggang = innerObj.pinggang;
      pinggangMin = innerObj.pinggangMin;
      pinggangMax = innerObj.pinggangMax;

      // reassign paha value
      paha = innerObj["lingkar paha"];
      pahaMin = innerObj["lingkar paha min"];
      pahaMax = innerObj["lingkar paha max"];

      // reassign panjang value
      panjang = innerObj.panjang;
      panjangMin = innerObj.panjangMin;
      panjangMax = innerObj.panjangMax;

      basePrice = innerObj.harga;
      totalPrice = innerObj.harga;
      priceId.innerText = `Rp ${innerObj.harga.toLocaleString("id-ID")}`;
    }
  }
}

function callSuperego() {
  // get data
  for (let i = 0; i < dataBase.length; i++) {
    let innerObj = dataBase[i];
    if (innerObj.product === "Celana Jogger") {
      mainPhotoId.src = innerObj.mainPhoto;
      detailPhotoId.src = innerObj.detailPhoto;
      guidePhotoId.src = innerObj.guidePhoto;
      titleId.innerText = innerObj.title;
      deskripsiP1Id.innerText = innerObj.deskripsiP1;
      deskripsiP2Id.innerText = innerObj.deskripsiP2;

      // reassign pinggang value
      pinggang = innerObj.pinggang;
      pinggangMin = innerObj.pinggangMin;
      pinggangMax = innerObj.pinggangMax;

      // reassign paha value
      paha = innerObj["lingkar paha"];
      pahaMin = innerObj["lingkar paha min"];
      pahaMax = innerObj["lingkar paha max"];

      // reassign panjang value
      panjang = innerObj.panjang;
      panjangMin = innerObj.panjangMin;
      panjangMax = innerObj.panjangMax;

      basePrice = innerObj.harga;
      totalPrice = innerObj.harga;
      priceId.innerText = `Rp ${innerObj.harga.toLocaleString("id-ID")}`;
    }
  }
}

function callNomad() {
  // get data
  for (let i = 0; i < dataBase.length; i++) {
    let innerObj = dataBase[i];
    if (innerObj.product === "Celana Pendek") {
      mainPhotoId.src = innerObj.mainPhoto;
      detailPhotoId.src = innerObj.detailPhoto;
      guidePhotoId.src = innerObj.guidePhoto;
      titleId.innerText = innerObj.title;
      deskripsiP1Id.innerText = innerObj.deskripsiP1;
      deskripsiP2Id.innerText = innerObj.deskripsiP2;

      // reassign pinggang value
      pinggang = innerObj.pinggang;
      pinggangMin = innerObj.pinggangMin;
      pinggangMax = innerObj.pinggangMax;

      // reassign paha value
      paha = innerObj["lingkar paha"];
      pahaMin = innerObj["lingkar paha min"];
      pahaMax = innerObj["lingkar paha max"];

      // reassign panjang value
      panjang = innerObj.panjang;
      panjangMin = innerObj.panjangMin;
      panjangMax = innerObj.panjangMax;

      basePrice = innerObj.harga;
      totalPrice = innerObj.harga;
      priceId.innerText = `Rp ${innerObj.harga.toLocaleString("id-ID")}`;
    }
  }
}

function calcBTN() {
  // input data
  let pinggangInputVal = Number(pinggangInputId.value);
  let pahaInputVal = Number(pahaInputId.value);
  let panjangInputVal = Number(panjangInputId.value);

  // selisih dengan default
  selisihPinggang = pinggangInputVal - pinggang;
  selisihPaha = pahaInputVal - paha;
  selisihPanjang = panjangInputVal - panjang;
  let totalSelisih = selisihPinggang + selisihPaha + selisihPanjang;

  // reset price
  totalPrice = basePrice;

  // price
  let addPrice = totalSelisih * 1_000;
  if (totalSelisih > 0) {
    totalPrice += addPrice;
  }

  // discount
  if (Number(qtyId.value) >= 2) {
    totalPrice *= Number(qtyId.value) * 0.9;
  }

  // validasi ukuran
  if (pinggangInputVal < pinggangMin) {
    alert("ukuran pinggang terlalu kecil");
  } else if (pinggang > pinggangMax) {
    alert("ukuran pinggang terlalu besar");
  }
  if (pahaInputVal < pahaMin) {
    alert("ukuran paha terlalu kecil");
  } else if (paha > pahaMax) {
    alert("ukuran paha terlalu besar");
  }
  if (panjangInputVal < panjangMin) {
    alert("ukuran panjang terlalu kecil");
  } else if (panjang > panjangMax) {
    alert("ukuran panjang terlalu besar");
  }

  // display price
  priceId.innerText = `Rp ${totalPrice.toLocaleString("id-ID")}`;
}

function clickButton() {
  // if (totalPrice === 0) {
  //   alert("Silahkan pilih produk terlebih dahulu");
  // }

  document.getElementById("pop-up-price").innerText =
    totalPrice.toLocaleString("id-ID");
}

callMonarch();
