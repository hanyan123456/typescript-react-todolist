import * as React from 'react'
import Child from './component/child'
import './index.css'
interface IState {
    showModal: boolean,
    count: number,
}
interface IList {
    id: string,
    name: string,
    age: number
}

interface IProps {
    list: Array<IList>,

}
export default class Home extends React.Component<IProps, IState> {
    public state = {
        count: 0,
        list: [
            { id: '111', name: 'react', age: 10 },
            { id: '112', name: 'Vue', age: 11 },
            { id: '113', name: 'Angular', age: 12 }
        ],
        showModal: false,

    }
    myCall = (index: any) => {
        console.log(index)
    }
    addCount = () => {
        this.setState({
            count: this.state.count + 1
        })
        console.log(this.state.count)
    }
    render() {
        const { list, count, showModal } = this.state

        return (
            <div className='home'>
                <span>home</span>
                {showModal && <div>showModal</div>}
                <Child list={list} onMyClick={this.myCall} count={count} onAdd={this.addCount} ></Child>
            </div>
        )
    }
}