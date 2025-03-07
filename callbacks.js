const jokeElement = document.getElementById("joke");
const answerElement = document.getElementById("answer");
const answerButton = document.getElementById("answer-btn");

const dice = () => {
  return new Promise(function (resolve, reject) {
    let number = Math.floor(Math.random() * 2) + 1;
    console.log("Dice rolled: " + number);

    if (number === 1) {
      resolve();
    } else {
      reject("No joke this time, try again");
    }
  });
};

const display = () => {
  jokeElement.innerHTML = "";
  answerElement.innerHTML = "";
  answerButton.style.display = "none";
  dice()
    .then(() => {
      return fetch("https://teehee.dev/api/joke");
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data.question, data.answer);

      if (data.question && data.answer) {
        jokeElement.innerHTML = `<h2>${data.question}</h2>`;

        answerElement.innerHTML = `<p style="display: none;">${data.answer}</p>`;

        answerButton.style.display = "block";
        answerButton.onclick = () => {
          answerElement.innerHTML = `<p style="display: block;">${data.answer}</p>`;
        };
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      jokeElement.innerHTML = `<p>${error}</p>`;
      answerButton.style.display = "none";
    });
};

document.getElementById("btn").addEventListener("click", display);
