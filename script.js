//SNACK 1

const hamburger = { name: "Cheese Burger", weight: 250 };
const secondBurger = hamburger;
secondBurger.name = 'Double Cheese Burger';
secondBurger.weight = 500;

console.log(hamburger.name); // Double Cheese Burger
console.log(secondBurger.name ); // Double Cheese Burger

//SNACK 2

const hamburger = { 
	name: "Cheese Burger", 
	weight: 250,
	ingredients: ["Cheese", "Meat", "Bread", "Tomato"]
};

const secondBurger = {...hamburger};
secondBurger.ingredients[0] = "Salad";

console.log(hamburger.ingredients[0]); // Salad
console.log(secondBurger.ingredients[0]); // Salad

//SNACK 3

const hamburger = { 
	name: "Cheese Burger", 
	weight: 250,
	maker: {
		name: "Anonymous Chef",
		restaurant: {
			name: "Hyur's Burgers",
			address: "Main Street, 123",
			isOpen: true,
		},
		age: 29
	}
};

const secondBurger = structuredClone(hamburger);
const thirdBurger = structuredClone(hamburger);

//dato lo structuredClone, sono stati creati 3 oggetti ognuno con una sua struttura anche se complessa, 
// l'unica cosa che non riesce a copiare, essendo una deep copy, sono le funzioni che in questo caso non abbiamo

//SNACK 4

const chef = {
	name: "Chef Hyur",
	age: 29,
	makeBurger: (num = 1) => {
		console.log(`Ecco ${num} hamburger per te!`);
	},
}

//per l'oggetto chef sarebbe meglio utilizzare lo spread operetor data la funzione contenuta come proprietà di un oggetto
// quindi basterebbe: const secondChef = (...chef);

const restaurant = {
	name: "Hyur's Burgers",
	address: {
		street: 'Main Street',
		number: 123,
	},
	openingDate: new Date(2025, 3, 11),
	isOpen: false,
};

//qui essendo un oggetto annidato contenente altri oggetti, potremmo usare il JSON.pare(JSON.stringfy()).
//però data anche la funzio Date() conviene lo structuredClone() poichè con il metodo precedente
//non viene riconvertito in data ma rimane stringa
//quindi basterebbe: const secondResturand = structuredClone(resturant)