export const state = {
  items: [],
  query: "",
  selectedId: null,
  status: "loading",
  error: "",
};

export function getFilteredItems() {
  return state.items.filter((item) =>
    item.title.toLowerCase().includes(state.query.toLowerCase())
  );
}

export function getSelectedItem() {
  return state.items.find((item) => item.id == state.selectedId);
}