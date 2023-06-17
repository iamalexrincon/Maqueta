var firebaseConfig = {
  apiKey: "AIzaSyCM6FjSs398pdSmWQ9Anx3Av-xg0RoC7l0",
  authDomain: "project-b5217.firebaseapp.com",
  databaseURL: "https://project-b5217-default-rtdb.firebaseio.com",
  projectId: "project-b5217",
  storageBucket: "project-b5217.appspot.com",
  messagingSenderId: "433379871674",
  appId: "1:433379871674:web:63712259235d91185eeb83"
};

// Inicializa Firebase
firebase.initializeApp(firebaseConfig);

// Referencia a la base de datos de Firebase
var database = firebase.database();

// Manejador del formulario de inicio de sesión
$("#login-form").submit(function (event) {
  event.preventDefault();

  // Obtén los valores de los campos de inicio de sesión
  var email = $("#email").val();
  var password = $("#password").val();

  // Inicia sesión con Firebase Authentication
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function (userCredential) {
      // Inicio de sesión exitoso
      var user = userCredential.user;
      console.log("Inicio de sesión exitoso:", user);
      // Después del inicio de sesión exitoso
      window.location.href = "./Pages/Store.html";

      // Realiza cualquier otra acción necesaria después del inicio de sesión
    })
    .catch(function (error) {
      // Error en el inicio de sesión
      var errorCode = error.code;
      var errorMessage = error.message;
      console.error("Error en el inicio de sesión:", errorCode, errorMessage);
      // Maneja el error de inicio de sesión
    });
});

// Manejador de cambios de estado de autenticación
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // El usuario ha iniciado sesión
    console.log("Usuario autenticado:", user);
    // Cargar el contenido de la página Index.html
    loadIndexContent();
    window.location.href = "./Pages/Store.html";
  } else {
    // El usuario no ha iniciado sesión, redirigir a Cuenta.html
    window.location.href = "../index.html";
  }
});

// Función para cargar el contenido de la página Index.html
function loadIndexContent() {
  // Aquí puedes agregar el código para cargar el contenido de la página Index.html
}



// Manejador del formulario de creación de cuenta
$("#create-account-form").submit(function (event) {
  event.preventDefault();

  // Obtén los valores de los campos de creación de cuenta
  var newEmail = $("#new-email").val();
  var newPassword = $("#new-password").val();

  // Crea una cuenta con Firebase Authentication
  firebase.auth().createUserWithEmailAndPassword(newEmail, newPassword)
    .then(function (userCredential) {
      // Creación de cuenta exitosa
      var user = userCredential.user;
      console.log("Creación de cuenta exitosa:", user);
      // Realiza cualquier otra acción necesaria después de la creación de cuenta
    })
    .catch(function (error) {
      // Error en la creación de cuenta
      var errorCode = error.code;
      var errorMessage = error.message;
      console.error("Error en la creación de cuenta:", errorCode, errorMessage);
      // Maneja el error de creación de cuenta
    });
});

// Manejador de cambios de estado de autenticación
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // El usuario ha iniciado sesión
    console.log("Usuario autenticado:", user);
    // Realiza cualquier otra acción necesaria cuando el usuario ha iniciado sesión
  } else {
    // El usuario ha cerrado sesión
    console.log("Usuario no autenticado.");
    // Realiza cualquier otra acción necesaria cuando el usuario ha cerrado sesión
  }
});
