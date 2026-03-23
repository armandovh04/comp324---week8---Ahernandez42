import { state, getFilteredItems } from "./state.js";
import { loadItems } from "./api.js";
import { render } from "./render.js";

const searchEl = document.querySelector("#search");
const retryEl = document.querySelector("#retry");
const listEl = document.querySelector("#list");

async function startApp() {
  state.status = "loading";
  render();

  try {
    const data = await loadItems();
    state.items = data;
    state.status = "ready";

    if (data.length > 0) {
      state.selectedId = data[0].id;
    }

    render();
  } catch (error) {
    state.status = "error";
    state.error = error.message;
    render();
  }
}

searchEl.addEventListener("input", () => {
  state.query = searchEl.value;

  const filteredItems = getFilteredItems();
  if (filteredItems.length > 0) {
    state.selectedId = filteredItems[0].id;
  }

  render();
});

retryEl.addEventListener("click", () => {
  startApp();
});

listEl.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    state.selectedId = event.target.dataset.id;
    render();
  }
});

startApp();