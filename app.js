let products = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.jpg', 'tauntaun.jpg', 'unicorn.jpg', 'usb.jpg', 'water-can.jpg', 'wine-glass.jpg'];

let threeProducts = document.getElementById('three-product');
let leftProducts = document.getElementById('left-product');
let centerProducts = document.getElementById('center-product');
let rightProducts = document.getElementById('right-product');

let votingTurns = 25;

function mallProduct(name) {

  this.name = name.substring(0, name.length - 4);
  this.productShown = 0;
  this.productClicked = 0;
  this.image = `img/${name}`;

  mallProduct.allImages.push(this);
  mallProduct.imageMap[this.name] = this;
}

mallProduct.allImages = [];
mallProduct.imageMap = {};

for (let i = 0; i < products.length; i++) {
  new mallProduct(products[i]);
}

function randomThree() {
  let left = Math.floor(Math.random() * products.length);
  let center = Math.floor(Math.random() * products.length);
  let right = Math.floor(Math.random() * products.length);

  while (left === right || left === center || center ===right) {
    if (left === right) {
      right = Math.floor(Math.random() * products.length);
    }
    if (left === center) {
      center = Math.floor(Math.random() * products.length);
    }
    if (center === right) {
      right = Math.floor(Math.random() * products.length);
    }
  }

  let leftOption = mallProduct.allImages[left];
  let centerOption = mallProduct.allImages[center];
  let rightOption = mallProduct.allImages[right];

  return [leftOption, centerOption, rightOption];
}

function renderProducts() {

  let productsDisplayed = [leftProducts.name, centerProducts.name, rightProducts.name];

  let threeMore = randomThree();
  
  while (
    productsDisplayed[0] === threeMore[0].name ||
    productsDisplayed[1] === threeMore[0].name ||
    productsDisplayed[2] === threeMore[0].name ||
    productsDisplayed[0] === threeMore[1].name ||
    productsDisplayed[1] === threeMore[1].name ||
    productsDisplayed[2] === threeMore[1].name ||
    productsDisplayed[0] === threeMore[2].name ||
    productsDisplayed[1] === threeMore[2].name ||
    productsDisplayed[2] === threeMore[2].name
  ) {
    threeMore = randomThree();
  }

  leftProducts.src = threeMore[0].image;
  leftProducts.name = threeMore[0].name;
  threeMore[0].productShown++;

  centerProducts.src = threeMore[1].image;
  centerProducts.name = threeMore[1].name;
  threeMore[1].productShown++;

  rightProducts.src = threeMore[2].image;
  rightProducts.name = threeMore[2].name;
  threeMore[2].productShown++;
}

function handleClicks(event) {
  votingTurns--;

  for (let i = 0; i < mallProduct.allImages.length; i++) {
    if (event.target.name === mallProduct.allImages[i].name) {
      mallProduct.allImages[i].productClicked++;
      console.log(mallProduct.allImages[i]);
    }
  }
  renderProducts();

  if (!votingTurns) {
    threeProducts.removeEventListener('click', handleClicks);
  }
}

renderProducts();
threeProducts.addEventListener('click', handleClicks);

let ctx = document.getElementById("chart").getContext('2d');

let votesByProduct = [];
let timesShown = [];

for (let i = 0; i < mallProduct.allImages.length; i++) {
  votesByProduct.push(mallProduct.allImages[i].productClicked);
}

// function randomThree() {

//   let left = Math.floor(Math.random() * products.length);
//   let center = Math.floor(Math.random() * products.length);
//   let right = Math.floor(Math.random() * products.length);

//   while ((left === center) && (left === right) && (right === center)) {
//     left = Math.floor(Math.random() * products.length);
//     center = Math.floor(Math.random() * products.length);
//     right = Math.floor(Math.random() * products.length);
//   }

//   let leftOption = products[left];
//   let centerOption = products[center];
//   let rightOption = products[right];

//   let returnArr = [leftOption, centerOption, rightOption];
//   console.log(returnArr)
//   return returnArr;
// }

// function renderProducts(leftOption, centerOption, rightOption) { // product shown never goes >1. how to make the system remember previous times shown. Push to an array? idk
//   leftProducts.src = leftOption.productPath;
//   leftOption.productShown++;

//   centerProducts.src = centerOption.productPath;
//   centerOption.productShown++;

//   rightProducts.src = rightOption.productPath;
//   rightOption.productShown++;
// }
// // console.log(products)

// let randomProduct = randomThree();
// renderProducts(randomProduct[0], randomProduct[1], randomProduct[2]);

// threeProducts.addEventListener('click', function(event) {
//   console.log(event.target);

//   for (let i = 0; i < products.length; i++) {
//     if (event.target.src.includes(products[i].image)) {
//      products[i].timesClicked++;
//       alert(products[i]);
//     }
//   }

//   let threeMore = randomThree();
//   renderProducts(threeMore[0], threeMore[1], threeMore[2]);
// })