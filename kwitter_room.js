const firebaseConfig = {
    apiKey: "AIzaSyApIIHSIACMUkeVapZULW8OrPT_3oxKn30",
    authDomain: "chater-95ffe.firebaseapp.com",
    projectId: "chater-95ffe",
    storageBucket: "chater-95ffe.appspot.com",
    messagingSenderId: "119579552923",
    appId: "1:119579552923:web:1b69a97a085c095cda2a3e"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="welcome "+user_name+"!";

    function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({purpose:"adding room name"});
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
    }