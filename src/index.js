import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

// Reducer 생성 *******************
import { createStore } from 'redux';
import reducers from './reducers';
//import * as actions from './actions';

import { Provider } from 'react-redux';

const store = createStore(reducers);
// ********************************



/*
console.log(store.getState());
const unsubscribe = store.subscribe(() => console.log(store.getState()));
store.dispatch(actions.increment());
store.dispatch(actions.increment());
store.dispatch(actions.decrement());
store.dispatch(actions.setColor([200,200,200]));
unsubscribe();
store.dispatch(actions.setColor([210,210,210]));

  Store가 하는 일
  1. dispatch(action) : action을 reducer로 보내는 것, 디스페치가 실행되면 스토어는 리듀서에 현재상태와 방금 받은 변화를 보내줌
  2. getState() : 현재 상태 반환 함수
  3. subscribe(listener) : 상태가 바뀔때마다 실행될 함수 등록 * listener는 상태가 바뀔때마다 실행될 콜백함수
  4. replaceReducer(nextReducer) : hot-reloding 과 code 분할을 구현할때 사용됨
*/


ReactDOM.render(
  <Provider store = {store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
