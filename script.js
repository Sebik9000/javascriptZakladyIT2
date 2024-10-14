let first = document.getElementById('first');

first.addEventListener('click', function() {
  alert("Kliknul si na tlačítko!");
});

const second_button = document.getElementById('second');

second_button.addEventListener('click', function() {
  second_button.textContent = "Text se změnil";
});

const third_button = document.getElementById('third');

third_button.addEventListener('click', function() {
  const third = document.querySelector('#change-text');
  third.textContent = "Text se změnil";
});