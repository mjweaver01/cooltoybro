import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase-admin/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDwadKLKYEYrckPiU3MG5d089ViQ7QNEMI',
  authDomain: 'cooltoybro-3c21d.firebaseapp.com',
  projectId: 'cooltoybro-3c21d',
  storageBucket: 'cooltoybro-3c21d.appspot.com',
  messagingSenderId: '596780996851',
  appId: '1:596780996851:web:b301ff1ae6704fcf503f86',
  measurementId: 'G-EYGETWX7D4',
}

export const app = initializeApp(firebaseConfig)

export const db = getFirestore()
