// function secondName() {
//     const h1 = document.getElementById("name");
//     const p = document.getElementById('surname')
//     p.innerHTML = h1.innerHTML
//   }

// let bmw = {
//   color: "red",
//   model: "bmw 505",
//   owner: "sunnat",
//   speed: 100,
// };

// function firstName() {
//   const m1 = document.getElementById("n1");
//   const m2 = document.getElementById("n2");
//   const m3 = document.getElementById("n3");
//   const m4 = document.getElementById("n4");

//   n1.innerHTML = bmw.owner
//   n2.innerHTML = bmw.color
//   n3.innerHTML = bmw.model
//   n4.innerHTML = bmw.speed
// }

const cardOne = {
  price: 300,
  caption: "iPhone 7 plus",
  color: "Black and White",
  description: "Bu birinchi card",
  image: function () {
    return "images/001.jpg";
  },
};

const cardTwo = {
  price: 500,
  caption: "iPhone 8 plus",
  color: "White",
  description: "Bu ikkinchi card",
  image: function () {
    return "images/002.jpeg";
  },
};

const cardThree = {
  price: 800,
  caption: "iPhone 11",
  color: "Grey",
  description: "Bu uchinchi card",
  image: function () {
    return "images/003.jpg";
  },
};

// const button = document.getElementById("btn-primary");
// const button = document.getElementsByClassName("btn-primary");
// const button = document.querySelector("#btn-primary")
const button = document.querySelectorAll(".btn-primary")
console.log(button)

button[0].addEventListener("click", function () {
    const title = document.querySelector(".title1")
    const desc = document.querySelector(".desc1")
    const img = document.querySelector(".img1")

    img.setAttribute("src", cardOne.image())
    title.innerHTML = cardOne.caption
    desc.innerHTML = cardOne.description
})

button[1].addEventListener("click", function () {
    const title = document.querySelector(".title2")
    const desc = document.querySelector(".desc2")
    const img = document.querySelector(".img2")

    img.setAttribute("src", cardTwo.image())
    title.innerHTML = cardTwo.caption
    desc.innerHTML = cardTwo.description
})

button[2].addEventListener("click", function () {
    const title = document.querySelector(".title3")
    const desc = document.querySelector(".desc3")
    const img = document.querySelector(".img3")

    img.setAttribute("src", cardThree.image())
    title.innerHTML = cardThree.caption
    desc.innerHTML = cardThree.description
})
