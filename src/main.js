import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyBA_K2-jcp1x-jRIhSQKBE91RgRBAM7tzg",
    authDomain: "cnn-news-2566d.firebaseapp.com",
    projectId: "cnn-news-2566d",
    storageBucket: "cnn-news-2566d.appspot.com",
    messagingSenderId: "885119372523",
    appId: "1:885119372523:web:1546b8779d486a4add42ae",
    measurementId: "G-ZSMWLW3NJL"
  };
  firebase.initializeApp(firebaseConfig);
createApp(App).mount('#app')
