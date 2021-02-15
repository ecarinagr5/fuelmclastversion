
//Firebase
import {firebase} from '../firebase'

const data = []
//TYPES
export const SEND_DATA_DB = 'SEND_DATA_DB'

//REDUCERS
export default function sendDataBase ( state = [] , action){
    switch(action.type){
        case SEND_DATA_DB:
            return action
        default:
            return state;
    }
}

//ACTIONS 
export const sendDataDatabase = (data) => async (dispatch) => {
    console.log("sendDataDatabase", data[0].preciosimulado)
 let val = data[0].preciosimulado;
 console.log("val", val)
    try {
        const db = firebase.firestore();
        const nuevoregistro = {
            precio:23.6,
            fecha: Date.now()
        }
        //Send to FireStore DB
        const  data = await db.collection('registrosimulador').add(nuevoregistro);
        console.log("data",data)

    } catch (error) {
        console.log("ERRORFIREBASE",error)
    }
}