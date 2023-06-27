let count = 0;

const value = document.getElementById('value');

const resetBtn = document.querySelector('.reset');
const increaseBtn = document.querySelector('.increase');
const decreaseBtn = document.querySelector('.decrease');

increaseBtn.addEventListener('click', function() {
  count++;
  value.textContent = count;
  if (count > 0) {
    value.style.color = 'green';
  } else if (count < 0) {
    value.style.color = 'red';
  } else {
    value.style.color = '#222';
  }
});

resetBtn.addEventListener('click', function() {
  count = 0;
  value.textContent = count;
  value.style.color = '#222';
});

decreaseBtn.addEventListener('click', function() {
  count--;
  value.textContent = count;
  if (count > 0) {
    value.style.color = 'green';
  } else if (count < 0) {
    value.style.color = 'red';
  } else {
    value.style.color = '#222';
  }
});
