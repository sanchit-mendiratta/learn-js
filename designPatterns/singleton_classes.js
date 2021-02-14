class MyLogger {
	constructor() {
		this.myLogs = [];
	}
	log(input) {
		this.myLogs.push(input);
		// do fancy code to send this log somewhere
	}
	getLogs() {
		return this.myLogs;
	}
}

// this is the singleton
class MyLoggerSingleton {
	constructor() {
		if (!MyLoggerSingleton.instance) {
			MyLoggerSingleton.instance = new MyLogger();
		}
	}
	getMyLoggerInstance() {
		return MyLoggerSingleton.instance;
	}
}

const myLogger = new MyLoggerSingleton().getMyLoggerInstance();

class Customer {
	constructor(order) {
		this.price = order.price;
		this.food = order.foodItem;
		myLogger.log(order);
	}
	// other cool stuff happening for the customer
}

const myLogger2 = new MyLoggerSingleton().getMyLoggerInstance();

class Restaurant {
	constructor(inventory) {
		this.quantity = inventory.count;
		this.food = inventory.foodItem;
		myLogger.log(inventory);
	}
	// other cool stuff happening at the restaurant
}

let customer = new Customer({ price: 10, foodItem: 'Sandwich' });
let restaurant = new Restaurant({ inventory: 20, foodItem: 'Sandwich' });

const myLogger3 = new MyLoggerSingleton().getMyLoggerInstance();
console.log(myLogger3.getLogs());
