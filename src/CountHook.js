/*
 * @Author: wangshiyang
 * @Date: 2023-06-09 16:03:14
 * @LastEditors: wangshiyang
 * @LastEditTime: 2023-06-09 16:03:17
 * @Description: 自定义hooks
 *
 */
import { reactive, toRefs } from "vue"

export const useCounter = ()=>{
    const state  = reactive({
        count:0,
        add(){
            state.count++
        }
    })
    const refState = toRefs(state);
    return refState
}
