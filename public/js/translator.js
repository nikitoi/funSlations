document.addEventListener('DOMContentLoaded', function() {
  const translation = document.querySelector('.translation');
  const sayLoudButton = document.querySelector('#sayloud_button');
  const synth = window.speechSynthesis;

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
    const title = document.querySelector('.welcome_title').innerText;
    const lanquage = title.slice(11);
    console.log(lanquage);
    let voiceNum = pickLang(lanquage);
    console.log(voiceNum);
    const textToSay = e.target.parentElement.querySelector('p').innerText;
    const voices = synth.getVoices();
    console.log(voices);
    const utterance = new SpeechSynthesisUtterance(textToSay);
    utterance.voice = voices[voiceNum];
    speechSynthesis.speak(utterance);
  })

  function pickLang (str) {
    if (str === 'russian-accent translator') {
      return 63;
    } else if (str === 'hodor translator') {
      return 11;
    } else if (str === 'minion translator') {
      return 21;
    } else if (str === 'dothraki translator') {
      return 15;
    } else if (str === 'doggo translator') {
      return 14;
    } else {
      return 7;
    }
  }
});
