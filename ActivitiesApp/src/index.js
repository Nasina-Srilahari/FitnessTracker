import('./App');

import { registerLicense } from '@syncfusion/ej2-base';
import firebase from 'firebase/compat/app';
import 'firebase/auth';
import 'firebase/database';
import { getDatabase, ref, update } from 'firebase/compat/database';

// Registering Syncfusion license key

registerLicense('Ngo9BigBOggjHTQxAR8/V1NHaF5cXmVCf1JpRGZGfV5yd0VHYlZTRXxeQU0SNHVRdkdgWH5eeHRVRGFdUkxxXEQ=');

const firebaseConfig = {
    apiKey: "AIzaSyDBiIxJ6RIBvA3DIeJI30ZbGZDNU0WC7uA",
    authDomain: "fitnesstracker-6148a.firebaseapp.com",
    projectId: "fitnesstracker-6148a",
    storageBucket: "fitnesstracker-6148a.appspot.com",
    messagingSenderId: "97987003867",
    appId: "1:97987003867:web:b8cc87f06c36d83c22d3fe"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Reference to the root of the database
const rootRef = app.database().ref();

// Data to be pushed
const userData = {
    user1: {
        '09-11-2023': {
            heartrate: 70,
            steps: 300,
            calories:3030,
            sleep:9,
        },
        '08-11-2023': {
            heartrate: 80,
            steps: 300,
            calories:3030,
            sleep:8,
        },
        '07-11-2023': {
            heartrate: 90,
            steps: 300,
            calories:3030,
            sleep:7,
        },
        '06-11-2023': {
            heartrate: 50,
            steps: 300,
            calories:3030,
            sleep:6,
        },
        '05-11-2023': {
            heartrate: 65,
            steps: 300,
            calories:3030,
            sleep:5,
        },
    },
};

// Push the data to the database
rootRef.update(userData)
    .then(() => {
        console.log('Data successfully pushed to Firebase!');
    })
    .catch((error) => {
        console.error('Error pushing data to Firebase:', error);
    });
