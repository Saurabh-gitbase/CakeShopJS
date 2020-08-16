let products = {
  cakes: [
    {
      name: "Chocolava Cake",
      imgURL:
        "https://www.bakingo.com/blog/wp-content/uploads/2020/06/chocolava-cake-300x185.jpg",
      price: "$10",
    },
    {
      name: "Banana Cake",
      imgURL:
        "https://www.bakingo.com/blog/wp-content/uploads/2020/06/banana-cake-300x185.jpg",
      price: "$10",
    },
    {
      name: "Black Forest Cake",
      imgURL:
        "https://www.bakingo.com/blog/wp-content/uploads/2020/06/black-forest-cake-300x185.jpg",
      price: "$10",
    },
    {
      name: "Brownie Cake",
      imgURL:
        "https://www.bakingo.com/blog/wp-content/uploads/2020/06/brownie-cake-300x185.jpg",
      price: "$10",
    },
    {
      name: "Bundt Cake",
      imgURL:
        "https://www.bakingo.com/blog/wp-content/uploads/2020/06/bundt-cake-300x185.jpg",
      price: "$10",
    },
  ],

  cupcakes: [
    {
      name: "Panda Cupcakes",
      imgURL:
        "https://www.berries.com/blog/wp-content/uploads/2016/01/2-pandas.jpg",
      price: "$10",
    },
    {
      name: "Apple Pie Cupcakes",
      imgURL:
        "https://www.berries.com/blog/wp-content/uploads/2016/01/3-spoonful.jpg",
      price: "$10",
    },
    {
      name: "Butterbeer Cupcakes",
      imgURL:
        "https://www.berries.com/blog/wp-content/uploads/2016/01/7-butterbeer.jpg",
      price: "$10",
    },
    {
      name: "Lemon Cupcakes",
      imgURL:
        "https://www.berries.com/blog/wp-content/uploads/2016/01/8-pioneer-lemon.jpg",
      price: "$10",
    },
    {
      name: "Black Forest Cupcakes",
      imgURL:
        "https://www.berries.com/blog/wp-content/uploads/2016/01/10-sugar-soul.jpg",
      price: "$10",
    },
  ],
  sweets: [
    {
      name: "Gulab Jamun",
      imgURL:
        "https://i.ndtvimg.com/i/2016-10/gulab-jamun_620x350_81477049812.jpg",
      price: "$10",
    },
    {
      name: "Gajar Ka Halwa",
      imgURL:
        "https://i.ndtvimg.com/i/2017-10/gajar-ka-halwa-recipe_620x330_51507896671.jpg",
      price: "$10",
    },
    {
      name: "Modak",
      imgURL:
        "https://c.ndtvimg.com/2018-09/hfq32sf8_modak-650_625x300_12_September_18.jpg",
      price: "$10",
    },
    {
      name: "Payasam",
      imgURL:
        "https://i.ndtvimg.com/i/2016-03/payasam-625_625x350_41459346459.jpg",
      price: "$10",
    },
    {
      name: "Kaju ki Barfi",
      imgURL:
        "https://i.ndtvimg.com/i/2016-03/kaju-barfi-625_625x350_81459346355.jpg",
      price: "$10",
    },
  ],
  doughnuts: [
    {
      name: "Glazed Donuts",
      imgURL:
        "https://v1.nitrocdn.com/SMAjQjQrSfukicyrZHRearuvaVtcHpQg/assets/static/source/rev-d98cf76/wp-content/uploads/2020/05/4-21-2-min.jpg",
      price: "$10",
    },
    {
      name: "Sprinkled Donuts",
      imgURL:
        "https://v1.nitrocdn.com/SMAjQjQrSfukicyrZHRearuvaVtcHpQg/assets/static/source/rev-d98cf76/wp-content/uploads/2020/05/5-21-2-min.jpg",
      price: "$10",
    },
    {
      name: "Jelly Donuts",
      imgURL:
        "https://v1.nitrocdn.com/SMAjQjQrSfukicyrZHRearuvaVtcHpQg/assets/static/source/rev-d98cf76/wp-content/uploads/2020/05/6-21-2-min.jpg",
      price: "$10",
    },
    {
      name: "Cronuts",
      imgURL:
        "https://v1.nitrocdn.com/SMAjQjQrSfukicyrZHRearuvaVtcHpQg/assets/static/source/rev-d98cf76/wp-content/uploads/2020/05/11-21-2-min.jpg",
      price: "$10",
    },
    {
      name: "Boston Cream Donut",
      imgURL:
        "https://v1.nitrocdn.com/SMAjQjQrSfukicyrZHRearuvaVtcHpQg/assets/static/source/rev-d98cf76/wp-content/uploads/2020/05/8-21-2-min.jpg",
      price: "$10",
    },
  ],
};

var loadCard = (productList) => {
  const outerdiv = document.getElementById("outerdiv");
  outerdiv.removeChild(outerdiv.firstElementChild);
  
  if (productList.length) 
  {
    const cardBox = document.createElement("div");
    cardBox.id = "products";
    cardBox.style.paddingBottom = "50px";

    for (let item of productList) {
      const cardDetails = document.createElement("div");
      cardDetails.className = "card";
      cardDetails.style.width = "18rem";
      cardDetails.style.boxShadow = "35px";

      const image = document.createElement("img");
      image.className = "card-img-top";
      image.src = item.imgURL;
      image.style.width = "286px";
      image.style.height = "180px";
      image.alt = item.name;

      const innerdiv = document.createElement("div");
      innerdiv.className =
        "card-body d-flex justify-content-between align-items-center";
      const name = document.createElement("p");
      name.className = "card-text";
      name.innerHTML = item.name;

      const pricedetail = document.createElement("p");
      pricedetail.className = "card-text";
      pricedetail.innerHTML = item.price;
      pricedetail.style.fontSize = "1.5em";

      innerdiv.appendChild(name);
      innerdiv.appendChild(pricedetail);

      cardDetails.appendChild(image);
      cardDetails.appendChild(innerdiv);
      cardBox.appendChild(cardDetails);
    }
    outerdiv.appendChild(cardBox);
  } 
  else {
    const errorCard = document.createElement("div");
    errorCard.className = "jumbotron jumbotron-fluid alert-danger";
    const innerdiv = document.createElement("div");
    innerdiv.className = "container text-center";
    const innerh1 = document.createElement("h1");
    innerh1.className = "display-4";
    innerh1.innerHTML = "Not Found !!!";
    innerdiv.appendChild(innerh1);
    errorCard.appendChild(innerdiv);
    outerdiv.appendChild(errorCard);
  }

};

let allprod = [
  ...products.cakes,
  ...products.cupcakes,
  ...products.sweets,
  ...products.doughnuts,
];

var allProd = () => {
  loadCard(allprod);
};

var cake = () => {
  const prod = [...products.cakes];
  loadCard(prod);
};

var cupCakes = () => {
  const prod = [...products.cupcakes];
  loadCard(prod);
};

var sweets = () => {
  const prod = [...products.sweets];
  loadCard(prod);
};

var doughnuts = () => {
  const prod = [...products.doughnuts];
  loadCard(prod);
};

document.getElementById("search").addEventListener("submit", function (event) {
  console.log("hi");
  event.preventDefault();
  const itemval = document.getElementById("searchval").value;
  let newProd = [];
  for (let item of allprod) {
    let tempval = item.name.toLowerCase();
    if (tempval.includes(itemval.toLowerCase())) {
      newProd.push(item);
    }
  }
  document.getElementById("searchval").value = "";
  loadCard(newProd);
  
});
