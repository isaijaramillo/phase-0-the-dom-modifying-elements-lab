main.remove('main')

const newHeader = document.createElement('h1');


if (newHeader.nodeName === 'H1') {
  console.log("The 'newHeader' variable points to an <h1> node.");
} else {
  console.log("Make sure you create an <h1> and assign it to the 'newHeader' variable.");
}

const h1 = document.createElement('h1');

newHeader.id = 'victory';

if (newHeader.id === 'victory') {
  console.log("The 'newHeader' variable points to an <h1> node with an id of 'victory'.");
} else {
  console.log("Make sure the id of your <h1> is set to 'victory'.");
}

const h2 = document.createElement('h1');

newHeader.id = 'victory';

const yourName = "Isai"; 
newHeader.textContent = `${yourName} is the champion`;

if (newHeader.textContent.includes("is the champion")) {
  console.log(`The 'newHeader' variable points to an <h1> node with an id of 'victory' that includes the text "${yourName} is the champion".`);
} else {
  console.log(`Make sure your <h1> with id 'victory' includes the text "${yourName} is the champion" inside it.`);
}
