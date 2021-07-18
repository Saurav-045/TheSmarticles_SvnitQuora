
import firebase from "firebase/app";
import "firebase/auth";
  // Reference messages collection
  //var messagesRef = firebase.database().ref('messages');

// Submit form
function submitForm(){

  // Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var password = getInputVal('password');

  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });

  // Save message
  //saveMessage(name, email, password);

  // Show alert
  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
// function saveMessage(name, email, password){
//     var newMessageRef = messagesRef.push();
//     newMessageRef.set({
//       name: name,
//       email:email,
//       password:password,
//     });
//   }