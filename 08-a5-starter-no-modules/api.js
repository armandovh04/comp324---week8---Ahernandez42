export async function loadItems() {
  const response = await fetch("./data/items.json");

  if (!response.ok) {
    throw new Error("Could not load items.");
  }

  return await response.json();
}