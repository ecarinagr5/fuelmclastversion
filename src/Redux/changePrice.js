const priceview = true
const  valor = 1;
//TYPES
export const CHANGE_PRICE_VIEW= 'CHANGE_PRICE_VIEW'

//REDUCERS
export default function setPriceView ( state = valor , action){
    switch(action.type){
        case CHANGE_PRICE_VIEW:
            return !state
        default:
            return state;
    }
}

//ACTIONS 
  export function setTypePrice (priceview) {
    return {
      type: CHANGE_PRICE_VIEW,
      priceview,
    };
  }