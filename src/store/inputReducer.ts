/*
 * @Author: 寒嫣
 * @Date: 2019-11-12 15:58:49
 * @Description: file content
 * 
 */
import * as Types from './type'
import { Actions } from './type'
const instate = {
    inputValue: '我们',
    lists: ['1', '2']
}
const inputReducer = (state = instate, action: Actions) => {
    const newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case Types.INPUT_VALUE:
            newState.inputValue = action.value
            return newState
        case Types.ADD_LIST:
            // console.log(action.value)
            newState.lists.push(action.value)
            // console.log(newState.lists)
            return newState
        case Types.DELETE_VALUE:
            console.log(action.index)
            newState.lists.splice(action.index, 1)
            return newState
        default:
            return state
    }
}
export default inputReducer