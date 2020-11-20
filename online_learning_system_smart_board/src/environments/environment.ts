// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {SocketIoConfig} from 'ng-socket-io';

export const environment = {
    production: false,
    socketURL: 'http://localhost:5007',
    firebaseConfig: {
        apiKey: 'AIzaSyB4lppX1YyXqT_fAKfrB0-MJClpzwNAOes',
        authDomain: 'online-learning-system-d9124.firebaseapp.com',
        databaseURL: 'https://online-learning-system-d9124.firebaseio.com',
        projectId: 'online-learning-system-d9124',
        storageBucket: 'online-learning-system-d9124.appspot.com',
        messagingSenderId: '49102983899',
        appId: '1:49102983899:web:4996960131ef2e28d232fe'
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
