import { Component } from '@angular/core';
import * as firebase from 'firebase' ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 constructor(){

   // Your web app's Firebase configuration
   var firebaseConfig = {
     apiKey: "AIzaSyBYON0kpmeLYZkrs2i2m8DZ3q6Agz-F71o",
     authDomain: "monprojet-sarra.firebaseapp.com",
     databaseURL: "https://monprojet-sarra.firebaseio.com",
     projectId: "monprojet-sarra",
     storageBucket: "",
     messagingSenderId: "211122410423",
     appId: "1:211122410423:web:d92d394d819da964"
   };
   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

 }
}
