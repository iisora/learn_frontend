import firebase from "firebase/app";
import "firebase/firestore";
/* ReactやVueはCLIを使うとあらかじめ組み込まれているので以下の記述は必要ない */
/* dotenvのインストールも必要ない */
// require('dotenv').config({ debug: true });

// console.log(require('dotenv').config({ debug: true }));

const settings = { timestampsInSnapshots: true };
// const settings = { experimentalForceLongPolling: true };

/* $npm install dotenv --save */
const config = {
    apiKey: process.env.VUE_APP_API_KEY,
    authDomain: process.env.VUE_APP_AUTH_DOMAIN,
    projectId: process.env.VUE_APP_PROJECT_ID,
    storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
    appId: process.env.VUE_APP_APP_ID,
    measurementId: process.env.VUE_APP_MEASUREMENT_ID
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);
firebase.firestore();

export default firebase;