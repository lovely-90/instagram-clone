import firebase from 'firebase';
import { USER_STATE_CHANGE } from '../constant/index';
import 'firebase/firestore';

export function fetchUser() {

    return ((dispatch) => {
        firebase.firestore().collections('users')
        .doc(firebase.auth().currentUser.uid)
        .get()
        .then((snapshot) => {
            if(snapshot){
                if(snapshot.exists){
                    dispatch({type: USER_STATE_CHANGE, currentUser: snapshot.data()})
                } else {
                    console.log("User doen't exist");
                }
            }
        })
    })
}