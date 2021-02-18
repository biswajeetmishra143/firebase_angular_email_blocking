// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  host : "http://localhost:5000/",
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyAHhXe-umozQEWmiy2_2_OQA-phxScX8Ak",
    authDomain: "school-59a7a.firebaseapp.com",
    databaseURL: "https://school-59a7a-default-rtdb.firebaseio.com",
    projectId: "school-59a7a",
    storageBucket: "school-59a7a.appspot.com",
    messagingSenderId: "398398559799",
    appId: "1:398398559799:web:8e421d6de6253e2e5211b2",
    measurementId: "G-9JK1NN0631"
  }
  
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
