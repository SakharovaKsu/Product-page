import { getAnalytics } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: process.env['REACT_APP_PRODUCT_API_KEY '],
  appId: process.env['REACT_APP_PRODUCT_APP_ID '],
  authDomain: process.env['REACT_APP_PRODUCT_AUTH_DOMAIN '],
  measurementId: process.env['REACT_APP_PRODUCT_MESAREMENT_ID '],
  messagingSenderId: process.env['REACT_APP_PRODUCT_MESSAGING_SENDER_ID '],
  projectId: process.env['REACT_APP_PRODUCT_PROJECT_ID '],
  storageBucket: process.env['REACT_APP_PRODUCT_STORAGE_BUCKET '],
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
