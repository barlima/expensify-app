import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDTnI9jem0XXyM7XQg8iURfmFGnnFOZaeY",
  authDomain: "expensify-dfa3f.firebaseapp.com",
  databaseURL: "https://expensify-dfa3f.firebaseio.com",
  projectId: "expensify-dfa3f",
  storageBucket: "expensify-dfa3f.appspot.com",
  messagingSenderId: "821774798115"
};

firebase.initializeApp(config);

const database = firebase.database();

database.ref().set({
  name: "Bartek Perucki",
  age: 25,
  isSingle: false,
  location: {
    city: 'Krakow',
    country: 'Poland'
  }  
}).then(() => {
  console.log('Data is saved');
}).catch((e) => {
  console.log('This failed.', e);
});

database.ref('isSingle').set(null); // same as remove

// database.ref()
//   .remove()
//   .then(() => {
//     console.log('isSingle has been removed');
//   }).catch(() => {
//     console.log('did not remove data');
//   });