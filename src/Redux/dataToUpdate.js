const chart = 'Bar'
//TYPES
export const SET_CURRENT_VISUALIZATION  = 'SET_CURRENT_VISUALIZATION'

//REDUCERS
export default function setVisualization ( state = chart , action){
    switch(action.type){
        case SET_CURRENT_VISUALIZATION:
            return action
        default:
            return state;
    }
}

//ACTIONS 

export function setCurrentVisualization(chart) {
    console.log("chart", chart)
    return {
      type: SET_CURRENT_VISUALIZATION,
      chart,
    };
  }