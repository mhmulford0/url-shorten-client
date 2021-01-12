import firebase from 'firebase/app';
import 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyCgO-w3WVqCwUiKCPfNbOuqa-fofw3W1_k',
  authDomain: 'lnkshrt-5cc68.firebaseapp.com',
  projectId: 'lnkshrt-5cc68',
  storageBucket: 'lnkshrt-5cc68.appspot.com',
  messagingSenderId: '17155075282',
  appId: '1:17155075282:web:24d3e5b160694b4871910b',
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

function SignupForm() {
  return <SignupForm firebase={firebase} />;
}

export default SignupForm;
