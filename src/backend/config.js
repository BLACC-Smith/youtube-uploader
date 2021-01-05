const { default: firebase } = require('firebase');

const firebaseConfig = {
	apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
	authDomain: 'blacc-smith.firebaseapp.com',
	databaseURL: 'https://blacc-smith.firebaseio.com',
	projectId: 'blacc-smith',
	storageBucket: 'blacc-smith.appspot.com',
	messagingSenderId: '758861764166',
	appId: '1:758861764166:web:1fb7689b53f5a706d7dc47',
	measurementId: 'G-X38KHZFPFM',
};
if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default firebase;
export { firestore, auth, provider, storage };
