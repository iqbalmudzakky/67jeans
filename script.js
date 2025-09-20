function buyBTN() {
  let product = "Celana Pendek";
  let pinggang = 90;
  let lingkarPaha = 65;
  let panjang = 85;

  let database = [
    {
      product: "Celana Panjang",
      pinggang: 88,
      "lingkar paha": 60,
      panjang: 78,
      harga: 100_000,
    },
    {
      product: "Celana Jogger",
      pinggang: 88,
      "lingkar paha": 60,
      panjang: 78,
      harga: 150_000,
    },
    {
      product: "Celana Pendek",
      pinggang: 88,
      "lingkar paha": 60,
      panjang: 50,
      harga: 85_000,
    },
  ];

  for (let i = 0; i < database.length; i++) {
    let innerObj = database[i];
    // console.log(innerObj.product);
    if (innerObj.product === product) {
      console.log(innerObj);
    }
  }
}

buyBTN();
