import firebase from 'firebase';
import 'firebase/database'; // If using Firebase database
import 'firebase/storage';

/**
 * To install firebase
 * npm install firebase@^8.3.1
 */
const firebaseConfig = {
    apiKey: "AIzaSyAxHlzpG_k2BHGcHcJSaL0geGS_ntdLV5Q",
    authDomain: "jobsearch-f2329.firebaseapp.com",
    databaseURL: "https://jobsearch-f2329-default-rtdb.firebaseio.com",
    projectId: "jobsearch-f2329",
    storageBucket: "jobsearch-f2329.appspot.com",
    messagingSenderId: "830677515794",
    appId: "1:830677515794:web:6890f934d8c7940747e2cb",
    measurementId: "G-F688CRS2PB"

    // apiKey: process.env.REACT_APP_WEATHER_API_KEY,
    // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    // databaseURL: process.env.REACT_APP_DATABASE_URL,
    // projectId: process.env.REACT_APP_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_APP_ID,
    // measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();
export default database;