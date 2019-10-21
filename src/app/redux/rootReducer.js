import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import linkReducer from "./link/linkReducer";

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    link: linkReducer
});

export default rootReducer;