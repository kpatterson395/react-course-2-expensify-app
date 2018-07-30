// const person = {
// 	age: 26,
// 	location: {
// 		city: 'Philadelphia',
// 		temp: 92
// 	}
// };


// const {name: firstName = "anonymous", age} = person;
// console.log(`${name} is ${age}`);

// const {city, temp: temperature} = person.location;
// if (city && temperature){
// 	console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
// 	title: "Ego is the Enemy",
// 	author: "Ryan Holiday",
// 	publisher: {
// 		name: "Penguin"
// 	}
// }

// const {name: publisherName = "self-published"} = book.publisher;


// console.log(publisherName);


//Array destructuring

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [, city, state = "Georgia"] = address;

console.log(`You are in ${city}, ${state}.`);

const item = ['coffee (hot)','$2.00', '$2.50', '$2.75'];

const [coffee,small,medium,large] = item;

console.log(`A medium ${coffee} costs ${medium}`)