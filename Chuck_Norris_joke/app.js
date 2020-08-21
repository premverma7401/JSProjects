document.getElementById('btnJokes').addEventListener('click', loadJokes);

function loadJokes(e) {
  const numberOfJokes = document.querySelector('#number').value;

  const xhr = new XMLHttpRequest();
  const url = `http://api.icndb.com/jokes/random/${numberOfJokes}`;
  xhr.open('GET', url, true);

  xhr.onload = function () {
    if (xhr.status === 200) {
      const jokelist = JSON.parse(this.responseText);
      console.log(jokelist.value);
      let output = '';

      if (jokelist.type === 'success') {
        jokelist.value.forEach(function (joke) {
          output += `<li>${joke.joke}</l1>`;
        });
        document.querySelector('.jokes').innerHTML = output;
      }
    } else {
      document.querySelector('.jokes').innerHTML = 'Something went wrong';
    }
  };

  xhr.send();
  e.preventDefault();
}

document.getElementById('reset').addEventListener('click', reset);
function reset() {
  window.location.reload();
}
