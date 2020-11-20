/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  socketURL: 'http://localhost:5007',
  baseUrl: 'http://localhost:5007',
  // Firebase auth configuration.
  firebaseConfig: {
    apiKey: 'AIzaSyB4lppX1YyXqT_fAKfrB0-MJClpzwNAOes',
    authDomain: 'online-learning-system-d9124.firebaseapp.com',
    databaseURL: 'https://online-learning-system-d9124.firebaseio.com',
    projectId: 'online-learning-system-d9124',
    storageBucket: 'online-learning-system-d9124.appspot.com',
    messagingSenderId: '49102983899',
    appId: '1:49102983899:web:cf8c9279d576527ed232fe'
  }
};
