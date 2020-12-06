
 var firebaseConfig = {
  apiKey: "AIzaSyDzRfJEcu35HWG52-QsRJiCdtBMnRgHhII",
  authDomain: "test-form-78699.firebaseapp.com",
  projectId: "test-form-78699",
  storageBucket: "test-form-78699.appspot.com",
  messagingSenderId: "191809710197",
  appId: "1:191809710197:web:1ea73cc4f31d4c4a11303c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//refernce contact label
let contactInfo = firebase.database().ref("infos");

// listen for submit

document.querySelector(".contact-form").addEventListener("submit",submitForm);

function submitForm(e)
{
  e.preventDefault();
  // get input vals
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let message = document.querySelector(".message").value;
  console.log(name,email,message);

  saveContactInfo(name,email,message);
  document.querySelector(".contact-form").reset();
}
function saveContactInfo(name,email,message)
{
  let newContactInfo= contactInfo.push();
  newContactInfo.set({
    name :name,
    email : email,
    message: message
  });
}