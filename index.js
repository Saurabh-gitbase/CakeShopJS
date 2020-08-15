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

var handleSubmit = () => {
  const event = document.getElementById("form");
  event.preventDefault();
  const val = document.getElementById("search").value;
  console.log(val);

}

// function logSubmit(event) {
//   log.textContent = `Form Submitted! Time stamp: ${event.timeStamp}`;
//   event.preventDefault();
// }
// const form = document.getElementById('form');
// form.addEventListener('submit', logSubmit);

// const form = document.getElementById('form');
// form.addEventListener('submit', logSubmit); 



var loadCard = (allprod) => {
  let outerdiv = document.getElementById("outerdiv");
  outerdiv.removeChild(outerdiv.firstElementChild);
  
  let cardBox = document.createElement('div');
  cardBox.id = "products";
  cardBox.style.paddingBottom = "50px";

  for(let item of allprod)
  {
    let cardDetails = document.createElement('div');
    cardDetails.className = "card";
    cardDetails.style.width = "18rem";
    cardDetails.style.boxShadow = "35px";

    let image = document.createElement('img');
    image.className = "card-img-top";
    image.src = item.imgURL;
    image.style.width = "286px";
    image.style.height = "180px";
    image.alt = item.name;

    let innerdiv = document.createElement('div');
    innerdiv.className = "card-body d-flex justify-content-between align-items-center";
    let name = document.createElement('p');
    name.className = "card-text";
    name.innerHTML = item.name;

    let pricedetail = document.createElement('p');
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

var allProd = () => {
  let allprod = [...products.cakes,...products.cupcakes,...products.sweets,...products.doughnuts];
  loadCard(allprod);
}

var cake= () => {
  let allprod = [...products.cakes];
  loadCard(allprod);
}

var cupCakes= () => {
  let allprod = [...products.cupcakes];
  loadCard(allprod);
}

var sweets= () => {
  let allprod = [...products.sweets];
  loadCard(allprod);
}

var doughnuts= () => {
  let allprod = [...products.doughnuts];
  loadCard(allprod);
}

