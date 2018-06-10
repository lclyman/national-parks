import firebase from 'firebase/app'
import 'firebase/firestore'

firebase.initializeApp({
  projectId: '<<your firebase id>>',
  databaseURL: '<<your URL>>'
})
export const db = firebase.firestore()
