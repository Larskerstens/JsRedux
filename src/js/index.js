import store from "./redux/store";
import * as actions from "./redux/counter";
import * as action from "./redux/person";
import { ADD, REMOVE } from "./redux/klasvrienden";
import { getMovie } from "./redux/movie";

// COUNTER

console.log(store.getState().countState.counter);

// uitlezen store data
function updateCounter() {
  const { counter } = store.getState().countState;
  document.getElementById("counter").innerText = counter;
  document.getElementById("input").value = counter;
}
updateCounter();

// Store aanpassingen laten zien
store.subscribe(updateCounter);

// uitsturen actions
document.getElementById("inc").onclick = () => {
  store.dispatch(actions.increment());
};
document.getElementById("dec").onclick = () => {
  store.dispatch(actions.decrement());
};
document.getElementById("input").oninput = (e) => {
  store.dispatch(actions.setValue(parseInt(e.target.value)));
};

// KLASVRIENDEN

function updateVrienden() {
  document.getElementById("vrienden").innerHTML = store
    .getState()
    .vriendenState.vrienden.map(
      (e) => `<li data-id="${e.id}" >${e.name} (${e.id})</li>`
    )
    .join("");
}
updateVrienden();
store.subscribe(updateVrienden);

document.getElementById("vriendenform").onsubmit = (e) => {
  e.preventDefault();
  store.dispatch(ADD(document.querySelector("#vriendenform input").value));
  document.querySelector("#vriendenform input").value = "";
};
document.getElementById("vrienden").onclick = (e) => {
  if (e.target.nodeName === "LI") {
    store.dispatch(REMOVE(e.target.dataset.id));
  }
};

// PERSOON
function renderPersoon() {
  const { age, name } = store.getState().persoonState;
  document.getElementById("persoonname").innerText = name;
  document.getElementById("persoonage").innerText = age;
  document.getElementById("namefield").value = name;
  document.getElementById("agefield").value = age;
}
renderPersoon();
store.subscribe(renderPersoon);

document.getElementById("namefield").oninput = (e) => {
  store.dispatch(action.setName(e.target.value));
};
document.getElementById("agefield").oninput = (e) => {
  store.dispatch(action.setAge(parseInt(e.target.value)));
};

// MOVIE
function movieRender() {
  const { movie, loading, movies } = store.getState().movieState;
  document.getElementById("movietitle").innerText = movie;
  if (loading) {
    document.getElementById("movieloading").style.display = "block";
  } else {
    document.getElementById("movieloading").style.display = "none";
  }
  if (movies) {
    document.getElementById("moviegrid").innerHTML = movies
      .map((movie) => `<li>${movie.title}</li>`)
      .join("");
  } else {
    document.getElementById("moviegrid").style.display = "none";
  }
}
movieRender();
store.subscribe(movieRender);

document.getElementById("movieform").onsubmit = (e) => {
  e.preventDefault();
  store.dispatch(getMovie(document.querySelector("#movieform input").value));
  document.querySelector("#movieform input").value = "";
};
