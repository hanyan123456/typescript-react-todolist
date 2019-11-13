import * as React from 'react'
import './child.css'
// 数组每条对象里面数据是类型的（ { id: '111', name: 'react', age: 10 },）
interface IList {
    id: string,
    name: string,
    age: number
}
// 约束props类型，
interface IProps {
    // 父组件传过来的数据
    list: Array<IList>,
    // 父组件传过来的方法
    onMyClick: any,
    count: number,
    onAdd: any,
}
// 接受父组件传过来的props，子组件需加上约束类型
export default class Child extends React.Component<IProps> {
    // 操作删除
    deleteItem = (index: any) => {
        this.props.onMyClick(index)
    }
    // 操作count
    add = () => {
        this.props.onAdd()
    }
    render() {
        const { list, count } = this.props
        // const {  } = this.state
        return (
            <div className='child'>
                <div>我来自子组件</div>


                <div>{count}</div>
                <button onClick={this.add}>加</button>

                <ul>
                    {list.map((item, index) =>
                        (<li key={item.id}>
                            {item.name}+{item.age}
                            <button onClick={() => { this.deleteItem(index) }}>删除</button>
                        </li>)
                    )}
                </ul>
            </div>
        )
    }
}