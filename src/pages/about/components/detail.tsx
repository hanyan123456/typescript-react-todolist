import * as React from 'react'
import { connect } from "react-redux";
import { getInputValue } from "../../../store/actions";
import * as Types from '../../../store/type'
import * as Actions from '../../../store/actions'
import store from "../../../store/store";
interface IProps {
    inputValue: string,
    list: string[]
    // getInputValue: () => Promise<string>
}
// interface IState {
//     inputValue: string,
// }
class Detail extends React.Component<IProps> {
    // 获取InputValue
    getInputValue = (e: any) => {
        console.log(e.target.value)
        const action = Actions.getInputValue(e.target.value)
        store.dispatch(action)
    }
    // 将数据添加到数组里
    addList = () => {
        // console.log(this.props.inputValue)
        const action = Actions.addInputValue(this.props.inputValue)
        store.dispatch(action)
    }
    deleteItem = (index: number) => {
        const action = Actions.deleteItem(index)
        store.dispatch(action)
    }
    componentDidMount() {
        //接受更改后数据,订阅数据变化
        store.subscribe(this.handleStoreChange)
    }
    handleStoreChange = () => {
        // 更新更改后数据
        this.setState(store.getState())
    }
    render() {
        const { inputValue, list } = this.props
        // console.log(list)
        return (
            <div>
                <div>todolist</div>
                <div>{inputValue}</div>
                <ul>
                    {list.map((item, index) => (<li key={index}>{item}<button onClick={() => { this.deleteItem(index) }}>删除</button></li>))}
                </ul>
                <input placeholder='请输入' defaultValue={inputValue} onChange={this.getInputValue} />
                <button onClick={this.addList}>添加</button>
            </div>
        )
    }
}
// 获取redux里面的inputValue
const mapStateToProps = (state: any) => {
    return {
        inputValue: state.inputs.inputValue,
        list: state.inputs.lists
    }
}
// const mapDispathToProps = (dispatch: any) => {
//     return {
//         getInputValue(e: any) {
//             dispatch({
//                 type: Types.INPUT_VALUE,
//                 value: e.target.value

//             })
//         }
//     }
// }
export default connect(mapStateToProps)(Detail) 