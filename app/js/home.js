const sendBtn = document.querySelector('.form-bottom button');




const toSubmit = (e) => {
  e.preventDefault();


  const formItemInput = document.querySelector('.form-item-input');
  const radioBtns = document.querySelectorAll('.type-radio');
  const howLike = document.querySelectorAll('.how-like');
  const howDontLike = document.querySelectorAll('.how-dontlike');
  const formData = [];
  const howLikeData = []
  const howDontLikeData = [];


  formData.push(formItemInput.value)
  radioBtns.forEach(elem => {
    if(elem.checked) {
      formData.push(elem.value)
    }
  });
  howLike.forEach(elem => {
    if(elem.checked) {
      howLikeData.push(elem.value)
      formData.push(howLikeData)
    }
  })
  howDontLike.forEach(elem => {
    if(elem.checked) {
      howDontLikeData.push(elem.value)
      formData.push(howDontLikeData)
    }
  })
  console.log(formData);
}
