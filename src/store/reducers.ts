/*
 * @Author: 寒嫣
 * @Date: 2019-11-12 15:58:49
 * @Description: file content
 * 
 */
import * as Types from './type'
import { addCountAction } from './type'
const instate = {
    count: 0
}
const reducer = (state = instate, action: addCountAction) => {
    switch (action.type) {
        case Types.ADD_COUNT:
            return {
                count: state.count + 1
            }
        default:
            return state
    }
}
export default reducer