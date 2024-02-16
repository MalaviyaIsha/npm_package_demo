import inquirer from 'inquirer';
const menu = [
  { name: 'Burger', price: 80 },
  { name: 'Pizza', price: 150 },
  { name: 'Fries', price: 90 },
  { name: 'Maggie', price: 80 },
  { name: 'Salad', price: 120 },
];

const selectedItems = [];

//Display the menu and select item
function displayMenu() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'selectedItem',
        message: 'Select an item from the menu :',
        choices: [...menu.map(item => item.name), 'Done'],
      },
    ])
    .then((answer) => {
      if (answer.selectedItem === 'Done') {
        displayBill();
      } else {
        const selectedItem = menu.find(item => item.name === answer.selectedItem);
        selectedItems.push(selectedItem);
        displayMenu();
      }
    });
}

// display the bill
function displayBill() {
  console.log('\n Your Bill is :');
  let total = 0;
  selectedItems.forEach((item) => {
    console.log(`${item.name} - ${item.price}`);
    total += item.price;
  });
  console.log(`Total Bill: ${total}`);
}
displayMenu();
