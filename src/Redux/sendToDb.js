
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
            nombrecompleto:"Carina González",
            precio:23.6,
            fecha: Date.now(),
            id:"12",
            nombre: "<92",
            precioventa:13.41,
            preciorealdehoy:12.21,
            preciorecomendadoponderado:0,
            pvprecomendadofranja1:22.3,
            pvprecomendadofranja2:25.3,
            pvprecomendadofranja3:13.2,
            competenciaestrategica:15.4,
            preciodecomprahoy:13.4,
            fechadeultimacompra:20210129,
            preciopromediodeventa:16,
            mipreciopromediodeventa:12,
            preciocompramanana:12.3,
            precioultimacompra:19.3,
            competencia1:15.4,
            competencia2:11.8,
            competencia3:22.4,
            competencia4:12.3,
            competencia5:18.3,
            preciomodificadofranja1:0.00,
            preciomodificadofranja2:0.00,
            preciomodificadofranja3:0.00,
            preciopromediofranjas:0.00,
            simularfranja1:null,
            simularfranja2:null,
            simularfranja3:null,
            pvppromediodelacompentencia:12.2,
            pvpmaximodelacompetencia:15.3,
            pvpminimodelacompetencia:13.3,
            pvpcompentenciaestrategica:12.3,
            margenteorico:1.2,
            margenreal:1.5,
            margenobjetivo:1.8,
            volumenpromediodelmes:150,
            volumenobjetivomensual:30,
            utilidad:1249
        }
        //Send to FireStore DB
        const  data = await db.collection('registrosimulador').add(nuevoregistro);
        console.log("data",data)

    } catch (error) {
        console.log("ERRORFIREBASE",error)
    }
}