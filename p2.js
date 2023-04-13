
let itemsData = {};    // Initialize an empty object 

const container = document.getElementById("container"); // Get container element
const addBtn = document.getElementById("add-btn");  //add button
addBtn.addEventListener("click", spawnItem);  // Add event listener to add button

function spawnItem() {
  const newItem = document.createElement("div");   // Create a new item element
  newItem.classList.add("item");   // Add class and ID to the new item element
  newItem.id = itemId;
  const bgColor = prompt("Enter background color (e.g., red, #ff0000)");  // Get user input for background color
  newItem.style.backgroundColor = bgColor;  // Add background color styling to the new item element
  container.appendChild(newItem);  // Add the new item element to the container

  itemsData[itemId] = {      // Store item data in the itemsData object
    id: itemId,
    bgColor: bgColor,
  };
}

