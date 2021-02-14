const station = 0
//TYPES
export const SET_CURRENT_STATION  = 'SET_CURRENT_STATION'

//REDUCERS
export default function setStation ( state = 0 , action){
    switch(action.type){
        case SET_CURRENT_STATION:
            return action
        default:
            return state;
    }
}

//ACTIONS 

export function setCurrentStation (station) {
    return {
      type: SET_CURRENT_STATION,
      station,
    };
  }