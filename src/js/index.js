import store from "./redux/store";
import * as actions from "./redux/counter";
import * as action from "./redux/person";
import { ADD, REMOVE } from "./redux/klasvrienden";

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
