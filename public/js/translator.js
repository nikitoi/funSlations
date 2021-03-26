document.addEventListener('DOMContentLoaded', function() {
  const translation = document.querySelector('.translation');
  const sayLoudButton = document.querySelector('#sayloud_button');

  document.forms.translateForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { method, action, text } = e.target;
    let response = await fetch(action, {
      method,
      headers: {
        'Content-type':'Application/json'
      },
      body: JSON.stringify({text: text.value}),
    });
    let result = await response.json();
    console.log(result);
    translation.innerText = result;
  });

  const elems = document.querySelectorAll('.carousel');
  const instances = M.Carousel.init(elems, {dist: -50, shift: 0, numVisible: 7});

  sayLoudButton?.addEventListener('click', (e) => {
    const textToSay = e.target.parentElement.querySelector('p').innerText;
    console.log(textToSay);
    speechSynthesis.speak(
      new SpeechSynthesisUtterance(textToSay)
    );
  })
});
