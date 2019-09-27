
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyASlzLA04e-JEStTzYEpeOKKWaiCH5AEbA",
    authDomain: "course-scheduler-c2852.firebaseapp.com",
    databaseURL: "https://course-scheduler-c2852.firebaseio.com",
    projectId: "course-scheduler-c2852",
    storageBucket: "course-scheduler-c2852.appspot.com",
    messagingSenderId: "87974162173",
    appId: "1:87974162173:web:a1646cfcfc30ea29c45894"
  };

firebase.initializeApp(firebaseConfig);
export const db = firebase.database().ref();
