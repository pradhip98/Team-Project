const contents = [{
    
   id:1, name: `Bean bag`,
    price:2200,
    oldPrice:6000,
    img: `./images/BB1.webp`
},
{ id:2,
    name: `Bean bag`,
    price:4200,
    oldPrice:7500,
    img: `./images/BB2.webp`
},
{ id:3,
    name: `Bean bag`,
    price:3200,
    oldPrice:6500,
    img: `./images/BB3.webp`
},
{ id:4,
    name: `Bean bag`,
    price:4000,
    oldPrice:8000,
    img: `./images/BB4.webp`
},
{ id:5,
    name: `Bean bag`,
    price:3800,
    oldPrice:8700,
    img: `./images/BB5.jpg`
}, { id:6,
    name: `Bean bag`,
    price:2400,
    oldPrice:4700,
    img: `./images/BB6.webp`
},
{ id:7,
    name: `Bean bag`,
    price:6000,
    oldPrice:9000,
    img: `./images/BB7.webp`
},
{ id:8,
    name: `Bean bag`,
    price:12000,
    oldPrice:7900,
    img: `./images/BB8.webp`
} ,{
  id:9,
  name: `Bean bag`,
  price:2500,
  oldPrice:6000,
  img: `./images/BB9.webp`
}, 
{
 id:12, name: `Bean bag`,
  price:6500,
  oldPrice:8000,
  img: `./images/BB12.webp`
}, 
{
 id:13, name: `Bean bag`,
  price:4900,
  oldPrice:7500,
  img: `./images/BB13.webp`
},  {
 id:14, name: `Bean bag`,
  price:3900,
  oldPrice:5600,
  img: `./images/BB14.webp`
}, 
{
 id:15, name: `Bean bag`,
  price:4900,
  oldPrice:6900,
  img: `./images/BB15.webp`
}, 
{
 id:16, name: `Bean bag`,
  price:5800,
  oldPrice:8900,
  img: `./images/BB16.webp`
},
{id:17, name: `Bean bag`,
    price:4800,
    oldPrice:8000,
    img: `./images/BB17.webp`
},
{ id:18,
    name: `Bean bag`,
    price:6400,
    oldPrice:8900,
    img: `./images/BB18.webp`
},
{ id:19,
    name: `Bean bag`,
    price:7000,
    oldPrice:9000,
    img: `./images/BB19.webp`
},
{ id:20,
    name: `Bean bag`,
    price:6000,
    oldPrice:9000,
    img: `./images/BB20.webp`
},
{ id:21,
    name: `Bean bag`,
    price:8000,
    oldPrice:11000,
    img: `./images/BB22.jpg`
}, { id:23,
    name: `Bean bag`,
    price:12000,
    oldPrice:15000,
    img: `./images/BB23.webp`
},

{ id:25,
    name: `Bean bag`,
    price:14800,
    oldPrice:17000,
    img: `./images/BB25.webp`
} ,{
  id:26,
  name: `Bean bag`,
  price:13000,
  oldPrice:16000,
  img: `./images/BB26.webp`
}, 
 
{
 id:28, name: `Bean bag`,
  price:16000,
  oldPrice:19000,
  img: `./images/BB28.webp`
}, 
{
 id:29, name: `Bean bag`,
  price:14500,
  oldPrice:17000,
  img: `./images/BB29.webp`
}, 
{
 id:30, name: `Bean bag`,
  price:13200,
  oldPrice:16000,
  img: `./images/BB30.webp`
},  {
 id:31, name: `Bean bag`,
  price:12200,
  oldPrice:14000,
  img: `./images/BB31.webp`
}, 
{
 id:32, name: `Bean bag`,
  price:14000,
  oldPrice:16000,
  img: `./images/BB32.webp`
}, 
{
 id:33, name: `Bean bag`,
  price:18000,
  oldPrice:20000,
  img: `./images/BB33.webp`
},

{
id:35, name: `Bean bag`,
price:12000,
oldPrice:14000,
img: `./images/BB35.webp`
}, 
{
id:36, name: `Bean bag`,
price:16000,
oldPrice:18000,
img: `./images/BB36.webp`
},  {
id:37, name: `Bean bag`,
price:16500,
oldPrice:18000,
img: `./images/BB37.webp`
}, 
{
id:38, name: `Bean bag`,
price:22000,
oldPrice:26000,
img: `./images/BB38.webp`
}, 
{
id:39, name: `Bean bag`,
price:21000,
oldPrice:24000,
img: `./images/BB39.webp`
},
]



for(let i=0;i<contents.length;i++){

  const newPrice = document.getElementsByClassName(`newPrice`)
const oldPrice = document.getElementsByClassName(`oldPrice`)
const image = document.getElementsByClassName(`image`)
const product = document.getElementById(`product`)

product.innerHTML +=`<div class="card " style="width: 18rem;" id="">
<img src="" alt="..." class="image">

<div class="card-title">
  <h5>Bean bag</h5>
  <div class="heart">
  <div class="con-like">
    <input class="like" type="checkbox" title="like">
    <div class="checkmark">
      <svg xmlns="http://www.w3.org/2000/svg" class="outline" viewBox="0 0 24 24">
        <path
          d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z">
        </path>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" class="filled" viewBox="0 0 24 24">
        <path
          d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z">
        </path>
      </svg>
      </div>
    </div>
  </div>
</div>

<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span><small style="color:grey"> (1129)</small>


<div class="price"><b class="newPrice">₹</b> <small><del class="oldPrice">₹</del></small> <small style="color: green;"> 17%
    off</small></div>
<div class="buy-cart">
<div data-tooltip="Price:-$20" class="button2">
<div class="button-wrapper">
  <div class="text">Buy Now</div>
    <span class="icon">
      <svg viewBox="0 0 16 16" class="bi bi-cart2" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
</svg>
    </span>
  </div>
</div>

  <button type="button" class="button">
    <span class="button__text">ADD TO CART</span>
    <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24"
        stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" height="24"
        fill="none" class="svg">
        <line y2="19" y1="5" x2="12" x1="12"></line>
        <line y2="12" y1="12" x2="19" x1="5"></line>
      </svg></span>
  </button>
</div>
</div>
`


image[i].src=contents[i].img;
image[i].alt=contents[i].id;
newPrice[i].innerText +=contents[i].price;
oldPrice[i].innerText +=contents[i].oldPrice


}