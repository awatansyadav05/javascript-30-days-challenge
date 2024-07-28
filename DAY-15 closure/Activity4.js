// Activity 4: Module Pattern
// Task 6
function createItemManager() {
  let items = []; // Private array to store items

  return {
    // Method to add an item
    addItem(item) {
      items.push(item);
      console.log(`${item} has been added.`);
    },

    // Method to remove an item
    removeItem(item) {
      const index = items.indexOf(item);
      if (index !== -1) {
        items.splice(index, 1);
        console.log(`${item} has been removed.`);
      } else {
        console.log(`${item} not found.`);
      }
    },

    // Method to list all items
    listItems() {
      if (items.length === 0) {
        console.log("No items in the collection.");
      } else {
        console.log("Items in the collection:");
        items.forEach((item, index) => {
          console.log(`${index + 1}: ${item}`);
        });
      }
    }
  };
}

// Create an instance of the ItemManager module
const itemManager = createItemManager();
itemManager.addItem("Book");
itemManager.addItem("Pen");
itemManager.addItem("Notebook");

// List items
itemManager.listItems();


itemManager.removeItem("Pen");


itemManager.listItems();


itemManager.removeItem("Pencil");


itemManager.listItems();
