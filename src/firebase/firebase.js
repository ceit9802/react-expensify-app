import { initializeApp, database,auth } from 'firebase';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};
// Initialize Firebase
initializeApp(firebaseConfig);
//analytics();


const googleAuthProvider = new auth.GoogleAuthProvider();

export {googleAuthProvider, auth, database as default};




// database().ref()
//   .on('value',(snapshot)=>{
//     const val=snapshot.val();
//     console.log(val);
//   });


// database().ref().set({
//   name:"CE IT",
//   age:38
// }).then(()=>{
//   console.log('Data saved');
// }).catch((e)=>{
//   console.log('Data save Failed.',e)
// });


// database().ref().set({
//   name:"Changed Name",
// }).then(()=>{
//   console.log('Second set worked');
// }).catch((e)=>{
//   console.log('Second set Failed.',e)
// });


// database().ref().set({
//   name:"Changed Name",
// }).then(()=>{
//   console.log('Second set worked');
// }).catch((e)=>{
//   console.log('Second set Failed.',e)
// });

// var adaNameRef = database().ref('users/ada/name');  
// adaNameRef.set({ first: 'Ada', last: 'Lovelace' })
//   .then(function() {
//     console.log('Synchronization succeeded');
//   })
//   .catch(function(error) {
//     console.log('Synchronization failed');
//   });

// var adaLastNameRef = database().ref('users/ada/name/last');  
// adaLastNameRef.remove()
//   .then(function() {
//     console.log("Remove succeeded.")
//   })
//   .catch(function(error) {
//     console.log("Remove failed: " + error.message)
//   });

// //Remove all
// // database().ref().remove()
// //   .then(function() {
// //     console.log("Removed everything.")
// //   })
// //   .catch(function(error) {
// //     console.log("Remove all failed: " + error.message)
// //   });  

// database().ref('users').update({
//     chandu:{name:{first:"Chandu",last:"Emani"}},
//     ada:{name:{first:"Ada2",last:"User"}}

// }).then(function() {
//   console.log("Update succeeded.")
// })
// .catch(function(error) {
//   console.log("Update failed: " + error.message)
// });


// database().ref('users').update({
//   'ada/name/last':"Lovelace"}
// ).then(function() {
// console.log("Update2 succeeded.")
// })
// .catch(function(error) {
// console.log("Update2 failed: " + error.message)
// });