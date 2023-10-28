console.log("\nTask # 44\n");

var itemsSet1OfSandwich = [
  "Cocumber",
  "Tomato",
  "Cheese",
  "Beef",
  "Chilli Saus",
];
var itemsSet2OfSandwich = ["Cocumber", "Tomato", "Cheese", "Beef", "Ketchup"];
var itemsSet3OfSandwich = ["Cocumber", "Tomato", "Cheese", "Chicken"];

function makeSandwich(items: string[]) {
  console.log("\nSummary of the Order");
  console.log("Your Sandwich will consists of following items");
  items.forEach((item) => console.log(item));
}

makeSandwich(itemsSet1OfSandwich);
makeSandwich(itemsSet2OfSandwich);
makeSandwich(itemsSet3OfSandwich);
