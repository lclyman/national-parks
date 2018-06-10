import firebase from 'firebase/app'
import 'firebase/firestore'

firebase.initializeApp({
  projectId: 'vue-firestore-a1010',
  databaseURL: 'https://vue-firestore-a1010.firebaseio.com'
})
export const db = firebase.firestore()