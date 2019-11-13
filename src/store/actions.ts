/*
 * @Author: 寒嫣
 * @Date: 2019-11-12 15:58:36
 * @Description: file content
 */
import * as types from './type'
export const addCount = () => {
    return {
        type: types.ADD_COUNT
    }
}
export const getInputValue = (value: string) => {
    return {
        type: types.INPUT_VALUE,
        value
    }
}
export const addInputValue = (value: string) => {
    return {
        type: types.ADD_LIST,
        value
    }
}
export const deleteItem = (index: number) => {
    return {
        type: types.DELETE_VALUE,
        index
    }
}