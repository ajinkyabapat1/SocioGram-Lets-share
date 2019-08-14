import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    const firebaseConfig = {
      apiKey: "AIzaSyCmzFsM_-jY-mf-gp26AluFVUl8uBqE3to",
      authDomain: "sociogram-f7a57.firebaseapp.com",
      databaseURL: "https://sociogram-f7a57.firebaseio.com",
      projectId: "sociogram-f7a57",
      storageBucket: "",
      messagingSenderId: "385438823498",
      appId: "1:385438823498:web:d4f9c9b8619217dd"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

}
