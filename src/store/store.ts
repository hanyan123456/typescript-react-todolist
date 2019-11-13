/*
 * @Author: 寒嫣
 * @Date: 2019-11-12 15:59:00
 * @Description: file content
 */
import { createStore, combineReducers } from 'redux';
import reducer from './reducers'
import inputReducer from './inputReducer'

// 合并
let comReducer = combineReducers({
    reducer: reducer,
    inputs: inputReducer
})

//创建
let store = createStore(
    comReducer
);
export type countState = ReturnType<typeof comReducer>

export default store; 