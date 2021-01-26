let allProducts = [];

function mallProduct(productName, productPath) {
  this.productName = productName;
  this.productPath = productPath;
  this.productShown = 0;
  this.shownArray= [];

  this.shownArray.push(this.productShown)
  allProducts.push(this);
}


new mallProduct('robot bag', 'img/bag.jpg');
new mallProduct('banana slicer', 'img/banana.jpg');
new mallProduct('ipad bathroom stand', 'img/bathroom.jpg');
new mallProduct('toeless boots', 'img/boots.jpg');
new mallProduct('breakfast machine', 'img/breakfast.jpg');
new mallProduct('meat flavored gum', 'img/bubblegum.jpg');
new mallProduct('uncomfortable chair', 'img/chair.jpg');
new mallProduct('cthulhu doll', 'img/cthulhu.jpg');
new mallProduct('duck mask for dog', 'img/dog-duck.jpg');
new mallProduct('canned dragon meat', 'img/dragon.jpg');
new mallProduct('pen utensil attachment', 'img/pen.jpg');
new mallProduct('pet mop gloves', 'img/pet-sweep.jpg');
new mallProduct('pizza scissors', 'img/scissors.jpg');
new mallProduct('shark sleeping bag', 'img/shark.jpg');
new mallProduct('baby mop onesie', 'img/sweep.png');
new mallProduct('tauntaun sleeping bag', 'img/tauntaun.jpg');
new mallProduct('canned unicorn meat', 'img/unicorn.jpg');
new mallProduct('tentacle usb drive', 'img/usb.gif');
new mallProduct('useless water can', 'img/water-can.jpg');
new mallProduct('useless wine glass', 'img/wine-glass.jpg');

// console.log(mallProduct.allProducts);

let threeProducts = document.getElementById('three-product');
let leftProducts = document.getElementById('left-product');
let centerProducts = document.getElementById('center-product');
let rightProducts = document.getElementById('right-product');

function randomThree() {
  let left = Math.floor(Math.random() * allProducts.length);
  let center = Math.floor(Math.random() * allProducts.length);
  let right = Math.floor(Math.random() * allProducts.length);

  while ((left === center) && (left === right) && (right === center)) {
    left = Math.floor(Math.random() * allProducts.length);
    center = Math.floor(Math.random() * allProducts.length);
    right = Math.floor(Math.random() * allProducts.length);
  }

  let leftOption = allProducts[left];
  let centerOption = allProducts[center];
  let rightOption = allProducts[right];

  let returnArr = [leftOption, centerOption, rightOption];
  console.log(returnArr)
  return returnArr;
}

function renderProducts(leftOption, centerOption, rightOption) { // product shown never goes >1. how to make the system remember previous times shown. Push to an array? idk
  leftProducts.src = leftOption.productPath;
  leftOption.productShown++;

  centerProducts.src = centerOption.productPath;
  centerOption.productShown++;

  rightProducts.src = rightOption.productPath;
  rightOption.productShown++;
}
// console.log(allProducts)

let randomProduct = randomThree();
renderProducts(randomProduct[0], randomProduct[1], randomProduct[2]);

threeProducts.addEventListener('click', function(event) {
  console.log(event.target);

  for (let i = 0; i < allProducts.length; i++) {
    if (event.target.src.includes(allProducts[i].image)) {
     allProducts[i].timesClicked++;
      alert(allProducts[i]);
    }
  }

  let threeMore = randomThree();
  renderProducts(threeMore[0], threeMore[1], threeMore[2]);
})