
//Firebase
import {firebase} from '../firebase'

const data = []
//TYPES
export const GET_DATA_DB = 'GET_DATA_DB'

//REDUCERS
export default function getDataBase ( state = [] , action){
    switch(action.type){
        case GET_DATA_DB:
            return action
        default:
            return state;
    }
}

//ACTIONS 
export const getDataDatabase = (data) => async (dispatch) => {
    console.log("getDataDsdfdsatabase", data)
    try {
        const db = firebase.firestore()
        const data = await db.collection('registrosimulador').get()
        const arrayData = await data.docs.map(doc => ({
          id: doc.id,
          ...doc.data() // Obtenemos elementos en elementos separados
        }))
        console.log("getDataDatabase", arrayData)
    } catch(error) {
      console.log(error)
    }

}