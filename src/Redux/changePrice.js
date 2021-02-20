const priceview = true
//TYPES
export const CHANGE_PRICE_VIEW= 'CHANGE_PRICE_VIEW'

//REDUCERS
export default function setPriceView ( state = 0 , action){
    switch(action.type){
        case CHANGE_PRICE_VIEW:
            return action
        default:
            return state;
    }
}

//ACTIONS 
  export function setTypePrice (priceview) {
    console.log("setTypePrice", priceview)
    return {
      type: CHANGE_PRICE_VIEW,
      priceview,
    };
  }