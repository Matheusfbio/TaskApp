import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCx2i5362Gpp7ktG_R_kwlSb00fMHK-z8s',
  authDomain: 'task-authentication-58742.firebaseapp.com',
  projectId: 'task-authentication-58742',
  storageBucket: 'task-authentication-58742.appspot.com',
  messagingSenderId: '138751756651',
  appId: '1:138751756651:web:927d036ddcf6b88836642e',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

//android: 138751756651-7suo2561l2fcq4be0q5ge700rs9fnn0e.apps.googleusercontent.com
