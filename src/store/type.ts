/*
 * @Author: 寒嫣
 * @Date: 2019-11-12 17:23:47
 * @Description: file content
 */
export const ADD_COUNT = 'ADD_COUNT'
export const INPUT_VALUE = 'INPUT_VALUE'
export const ADD_LIST = 'ADD_LIST'
export const DELETE_VALUE = 'DELETE_VALUE'

export interface addCountAction {
    type: typeof ADD_COUNT
}
export interface getInputAction {
    [x: string]: any
    type: typeof INPUT_VALUE
}
export interface addListAction {
    [x: string]: any
    type: typeof ADD_LIST
}
export interface deleteItemAction {
    [x: string]: any
    type: typeof DELETE_VALUE
}
// reducer中的action类型汇总
export type Actions = addCountAction | getInputAction | addListAction | deleteItemAction