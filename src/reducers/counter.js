import * as types from '../actions/ActionTypes';

const initialState = {
  number : 0,
  dummy: 'dumbdumb',
  dumbObject: {
    d: 0,
    u: 1,
    m: 2,
    b: 3
  }
};

export default function counter(state = initialState, action){

  /*
  if(typeof state === 'undefined'){
  return initialState;

  argument state를 counter 인자부분에 = 을 사용하여 가능
  } */

  switch(action.type){
    case types.INCREMENT:
      // spread 문법을 사용해서 ...state를 사용하면 계속 state가 덮어씌워짐
      return {
        ...state,
        number: state.number + 1,
        dumbObject: { ...state.dumbObject, u: 0 }
       };

    case types.DECREMENT:
      return {
        ...state,
        number: state.number -1
      };

    default:
      return state;
  }
}
