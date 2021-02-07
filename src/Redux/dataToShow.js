import axios from 'axios'
const dataMerge = require('../Estructuras/data.json');


//CONTANTS
//Receive data
const data = {
    array : [],
    offset: 0
}

//TYPES
const GET_DATA_SUCCESSFULL  = 'GET_DATA_SUCCESSFULL'

//REDUCERS
export default function ipcReducer( state = data, action ) {
    switch( action.type ){
        case GET_DATA_SUCCESSFULL:
            //send data to array data
            return { ...state, array: action.payload }
        default:
            return state
    }
}

//ACTIONS 

//asyn to call API
export const getDataAction = () => async (dispatch) => {

    /*if( localStorage.getItem('offset=0') ) {
        console.log('Local Storage Data')
        dispatch({
            type: GET_DATA_SUCCESSFULL,
            payload: JSON.parse(localStorage.getItem('offset=0')) //with JSON change array to JSON
        })
        return
    }*/
/*Example:https://run.mocky.io/v3/cc4c350b-1f11-42a0-a1aa-f8593eafeb1e */
    try {
        /*const res = await axios.get('https://firebasestorage.googleapis.com/v0/b/fuelmc-590d7.appspot.com/o/dataFuel.json?alt=media&token=6d2ee0dd-693c-478b-9708-3ee17d7246de')*/
        const res = dataMerge;
        console.log('API Storage')
        dispatch({
                type: GET_DATA_SUCCESSFULL,
                /*payload: res.data*/
                payload: res[0].usuario
            })
        //The goal is use localstorage to avoid force call API and keep the performance
        /*localStorage.setItem('offset=0', JSON.stringify(res.data)) //with JSON change array to JSON*/
    } catch (error) {
        console.log("ERRORFIREBASE",error)
    }

}

export const getDetailsAction = () => async (dispatch, getState) => {

}