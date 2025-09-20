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
    "lingkar paha": 60,
    panjang: 78,
    harga: 100_000,
  },
  {
    product: "Celana Jogger",
    mainPhoto: "assets/img/cover-product/superego.png",
    detailPhoto: "assets/img/detail-product/superego.png",
    guidePhoto: "assets/img/panduan-ukuran/superego.png",
    title: "SuperEgo - Premium Jogger Denim",
    deskripsiP1:
      "SuperEgo adalah jawaban untuk kamu yang ingin memadukan kenyamanan maksimal dengan gaya denim modern. Potongan jogger dengan ujung elastis memberi sentuhan kasual, sementara material denim stretch premium memastikan kamu tetap bebas bergerak sepanjang hari. Cocok dipakai untuk aktivitas santai hingga semi-formal, menjadikan SuperEgo pilihan ideal untuk gaya dinamis.",
    deskripsiP2:
      "Dengan layanan custom size, SuperEgo hadir menyesuaikan bentuk tubuhmu. Tidak kebesaran, tidak kesempitan—pas sempurna. Detail jahitan rapi dan desain yang versatile membuatnya bukan hanya jeans, tapi representasi gaya hidup praktis dan stylish.",
    pinggang: 88,
    "lingkar paha": 60,
    panjang: 78,
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
    "lingkar paha": 60,
    panjang: 50,
    harga: 85_000,
  },
];

// function to link navbar
function callMonarch() {
  // code here
}

function callSuperego() {
  // code here
}

function callNomad() {
  // change main-photo
  let mainPhotoId = document.getElementById("main-photo");
  let detailPhotoId = document.getElementById("detail-photo");
  let guidePhotoId = document.getElementById("guide-photo");
  let titleId = document.getElementById("title");
  let deskripsiP1Id = document.getElementById("description-p1")
  let deskripsiP2Id = document.getElementById("description-p2")

  for (let i = 0; i < dataBase.length; i++) {
    let innerObj = dataBase[i];
    if (innerObj.product === "Celana Pendek") {
      mainPhotoId.src = innerObj.mainPhoto;
      detailPhotoId.src = innerObj.detailPhoto;
      guidePhotoId.src = innerObj.guidePhoto;
      titleId.innerText = innerObj.title;
      deskripsiP1Id.innerText = innerObj.deskripsiP1
      deskripsiP2Id.innerText = innerObj.deskripsiP2
    }
  }
}

// function for calculate price
function buyBTN() {
  let product = "Celana Pendek";
  let pinggang = 90;
  let lingkarPaha = 65;
  let panjang = 85;

  for (let i = 0; i < database.length; i++) {
    let innerObj = database[i];
    // console.log(innerObj.product);
    if (innerObj.product === product) {
      console.log(innerObj);
    }
  }
}
