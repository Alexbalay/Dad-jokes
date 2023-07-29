const jokeEL = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

const config = {
  headers: {
    Accept: "application/json",
  },
};

const generateJoke = async function () {
  try {
    const res = await fetch("https://icanhazdadjoke.com/", config);
    const data = await res.json();
    jokeEL.innerHTML = data.joke;
  } catch (err) {
    jokeEL.innerHTML = err;
  }
};

generateJoke();

jokeBtn.addEventListener("click", generateJoke);
