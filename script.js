const cardWrapper = document.querySelector("#card-wrapper");

const data = [
  {
    id: "1",
    name: "BMW",
    price: "35000 $",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, quam.",
      img: './img/bmw.jpg'
  },
  {
    id: "2",
    name: "Mercedes",
    price: "40000 $",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, quam.",
      img: './img/bmw2.jpg'

  },
  {
    id: "3",
    name: "Tesla",
    price: "22000 $",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, quam.",
      img: './img/bmw3.jpg'

  },
];

function creatCard(card) {
  return `
<div class="card-wrapper row mb-3 border">
    <div class="col-2 p-3">
      <img width="200" height="200" src="${card.img}" alt="bmw">
    </div>
    <div class="col-10 p-3 ">
      <div class="title d-flex justify-content-between ml-4">
        <h1 class="fs-3">${card.name}</h1>
        <button class="btn btn-danger">delete</button>
      </div>
      <h3 class="fs-4 ml-4">${card.price}</h3>
      <p class="ml-4">${card.description}</p>
    </div>
   </div>
`;
}
document.addEventListener("DOMContentLoaded", function () {
  if (data.length) {
    data.forEach(card =>{
      let cardWrap = creatCard(card);
      cardWrapper.innerHTML += cardWrap;
    });
    let deleteButtons = document.querySelectorAll('button.btn-danger');
    deleteButtons.length && deleteButtons.forEach(del => {
       del.addEventListener('click', function () {
        let isDelete = confirm ("Rostdan ham shu ma;lumotni o'chirmoqchimisz?")
            if (isDelete) {
              this.parentNode.parentNode.parentNode.remove()
            } else {
              alert("Siz hech narsani o'chirmadingiz!")
            }
      });
    });
  }
});

