const sendBtn = document.querySelector('.send-btn');

const toSubmit = (e) => {
  e.preventDefault();

  const formItemInput = document.querySelector('.form-item-input');
  const whatLike = document.querySelectorAll('.how-like');
  const howDontLike = document.querySelectorAll('.how-dontlike');
  const typeRadioDog = document.querySelectorAll('.type-radio-dog');
  const typeRadioCat = document.querySelectorAll('.type-radio-cat');

  const dataForSend = {
    whatDoYouDo: '',
    dog: false,
    cat: false,
    whatLike: [],
    whatDontLike: [],
  }
  dataForSend.whatDoYouDo = formItemInput.value

  typeRadioDog.forEach(elem => {
    if (elem.checked) {
      dataForSend.dog = elem.value == 'true' ? true : false;
    }
  })

  typeRadioCat.forEach(elem => {
    if (elem.checked) {
      dataForSend.cat = elem.value == 'true' ? true : false;
    }
  })

  whatLike.forEach(elem => {
    if (elem.checked) {
      dataForSend.whatLike.push(elem.value)
    }
  })

  howDontLike.forEach(elem => {
    if (elem.checked) {
      dataForSend.whatDontLike.push(elem.value)
    }
  })

  console.log(dataForSend);
}
