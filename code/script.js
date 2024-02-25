// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

const customerName = prompt(
  `Hello and welcome to our establishment! May I have your name?`
  );

alert(
  `Are you hungry today, ${customerName}? We've got some delicious dishes here at Javascript Pizzeria!`
);

// Step 2 - Food choice
// Your code goes here
const typeOfFood = prompt(
  `What would you like to eat? A tasty pizza, our famous pasta or perhaps a fresh salad? Type a number 1-3.
  1. Pizza
  2. Pasta
  3. Salad`
);

let foodOfChoice = "";

if (typeOfFood === "1") {
  foodOfChoice = "Pizza"
  alert(
  `What a great choice, we love pizza too! You chose ${foodOfChoice}.`
);
} else if (typeOfFood === "2") {
  foodOfChoice = "Pasta"
  alert(
    `Mmm our famous homemade pasta. You chose ${foodOfChoice}.`
  );
} else if (typeOfFood === "3") {
  foodOfChoice = "Salad"
  alert(
  `Green and oh so fresh! You chose ${foodOfChoice}.`
);
} else {
  alert(
    `I'm sorry. That's not on the menu. Please select a number between 1-3.`
  );
}

// Step 3 - Subtype choice
// Your code goes here
let subtypeChoice = "";

if (foodOfChoice === "Pizza") {
  subtypeChoice = prompt(`What kind of pizza would you like? Type a number 1-3.
  1. Margherita
  2. Capricciosa
  3. Calzone
`);
} else if (foodOfChoice === "Pasta") {
  subtypeChoice = prompt(`What kind of pasta would you like? Type a number 1-3.
  1. Bolognese
  2. Aglio e olio
  3. Alfredo
  `);
} else if (foodOfChoice === "Salad") {
  subtypeChoice = prompt(`What kind of salad would you like? Type a number 1-3.
  1. Greek
  2. Caesar
  3. Garden
  `);
}

let dishOfChoice = "";

if (foodOfChoice === "Pizza") {
  if (subtypeChoice === "1") {
    dishOfChoice = "Margherita";
  } else if (subtypeChoice === "2") {
    dishOfChoice = "Capricciosa";
  } else if (subtypeChoice === "3") {
    dishOfChoice = "Calzone";
  } else {
    alert(`Sorry that ${foodOfChoice} isn't on our menu.`);
    exit(1);
  }
} else if (foodOfChoice === "Pasta") {
  if (subtypeChoice === "1") {
    dishOfChoice ="Bolognese";
  } else if (subtypeChoice === "2") {
    dishOfChoice = "Aglio e olio";
  } else if (subtypeChoice === "3") {
    dishOfChoice = "Alfredo";
  } else {
    alert(`Sorry that ${foodOfChoice} isn't on our menu.`);
    exit(1);
  }
} else if (foodOfChoice === "Salad") {
  if (subtypeChoice === "1") {
    dishOfChoice = "Greek";
  } else if (subtypeChoice === "2") {
    dishOfChoice = "Caesar";
  } else if (subtypeChoice === "3") {
    dishOfChoice = "Garden";
  } else {
    alert(`Sorry that ${foodOfChoice} isn't on our menu.`);
    exit(1);
  }
}

alert(`One ${dishOfChoice} ${foodOfChoice} coming up!`);
  
// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
