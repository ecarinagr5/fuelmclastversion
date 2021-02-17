const view = 'hoy'
//TYPES
export const SET_CURRENT_VIEW = 'SET_CURRENT_VIEW'

//REDUCERS
export default function setView ( state = 0 , action){
    switch(action.type){
        case SET_CURRENT_VIEW:
            return action
        default:
            return state;
    }
}

//ACTIONS 
  export function setCurrentView (view) {
    return {
      type: SET_CURRENT_VIEW,
      view,
    };
  }