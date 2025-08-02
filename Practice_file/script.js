const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

// Step 2: Create function to handle button click
button.addEventListener("click", () => {
  // Step 3: Store current value and clear input
  const itemText = input.value.trim();
  input.value = "";

  if (itemText === "") return; // Prevent empty items

  // Step 4: Create new elements
  const listItem = document.createElement("li");
  const span = document.createElement("span");
  const deleteBtn = document.createElement("button");

  // Step 5: Set text content
  span.textContent = itemText;
  deleteBtn.textContent = "Delete";

  // Step 6: Append span and button to <li>, then append <li> to list
  listItem.appendChild(span);
  listItem.appendChild(deleteBtn);
  list.appendChild(listItem);

  // Step 7: Add delete functionality
  deleteBtn.addEventListener("click", () => {
    list.removeChild(listItem);
  });

  // Step 8: Refocus input
  input.focus();
});