import { state, getFilteredItems, getSelectedItem } from "./state.js";

const statusEl = document.querySelector("#status");
const errorEl = document.querySelector("#error");
const errorMessageEl = document.querySelector("#errorMessage");
const listEl = document.querySelector("#list");
const detailEl = document.querySelector("#detail");

export function render() {
  statusEl.textContent = "";
  listEl.innerHTML = "";
  detailEl.innerHTML = "";

  if (state.status === "loading") {
    statusEl.textContent = "Loading...";
    errorEl.hidden = true;
    return;
  }

  if (state.status === "error") {
    errorEl.hidden = false;
    errorMessageEl.textContent = state.error;
    return;
  }

  errorEl.hidden = true;

  const filteredItems = getFilteredItems();

  if (filteredItems.length === 0) {
    statusEl.textContent = "No matches found.";
  } else {
    statusEl.textContent = filteredItems.length + " items shown";
  }

  filteredItems.forEach((item) => {
    const li = document.createElement("li");
    const button = document.createElement("button");

    button.textContent = item.title;
    button.dataset.id = item.id;

    li.appendChild(button);
    listEl.appendChild(li);
  });

  const selectedItem = getSelectedItem();

  if (selectedItem) {
    detailEl.innerHTML = `
      <h2>${selectedItem.title}</h2>
      <p>${selectedItem.author}</p>
      <p>${selectedItem.year}</p>
      <p>${selectedItem.summary}</p>
    `;
  }
}