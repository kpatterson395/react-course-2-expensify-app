import * as firebase from 'firebase';




const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database.ref('expenses')
// 	.once('value')
// 	.then((snapshot) => {
// 		const expenses = [];
// 		snapshot.forEach((childSnapshot) => {
// 			expenses.push({
// 				id: childSnapshot.key,
// 				...childSnapshot.val()
// 			});
// 		});
// 	});

// 	// database.ref('expenses').on('value', (snapshot) => {
// 	// 	const expenses = [];
// 	// 	snapshot.forEach((childSnapshot) => {
// 	// 		expenses.push({
// 	// 			id: childSnapshot.key,
// 	// 			...childSnapshot.val()
// 	// 		});			
// 	// 	});
// 	// 	console.log(expenses);
// 	// });

// database.ref('expenses').push({
// 	description: 'rent',
// 	note: 'june',
// 	amount: 4500,
// 	createdAt: 100
// });


// database.ref('expenses').on('child_removed', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses').on('child_changed', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses').on('child_add sed', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// })



// // database.ref('notes/-LIlAl0cHWsojy2nedn2').remove();
// // database.ref('notes').push({
// // 	title: 'to buy',
// // 	body: 'lettuce'
// // });



// // database.ref().on('value', (snapshot) => {
// // 	console.log(snapshot.val().name, " is a ", snapshot.val().job.title, " at ", snapshot.val().job.company)
// // })


// // database.ref('location/city')
// // 	.once('value')
// // 	.then((snapshot) => {
// // 		const val = snapshot.val();
// // 		console.log(val);
// // 	})
// // 	.catch((e) => {
// // 		console.log('error fetching', e);
// // 	});

// // database.ref().set({
// // 	name: 'Kristie Patterson',
// // 	age: 26,
// // 	stressLevel: 6,
// // 	job: {
// // 		title: 'developer',
// // 		company: 'Google'
// // 	},
// // 	isSingle: false,
// // 	location: {
// // 		city: 'Atlanta',
// // 		country: 'United States'
// // 	}
// // }).then(()=>{
// // 	console.log('data is saved');
// // }).catch((error)=>{
// // 	// console.log('this failed', error);
// // })


// // database.ref().update({
// // 	stressLevel: 9,
// // 	'job/company': 'Amazon',
// // 	'location/city': 'Seattle'
// // });

// // database.ref('isSingle').remove().then(()=> {
// // 	console.log("isSingle removed")
// // }).catch((e) => {
// // 	console.log(e)
// // })

