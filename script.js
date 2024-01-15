const deletor = document.querySelector('#btn');
const remove = document.querySelector('#card');


deletor.addEventListener('click', function () {
  let result = confirm("Rostdan ham shu elementni o'chirmoqchimisz? ");
  console.log(result, "O'chirildi.");
  if (result == true) {
    remove.remove()
  } else {
    alert("Iltimos o'chirishdan oldin o'ylab ko'ring!")
  }

});
