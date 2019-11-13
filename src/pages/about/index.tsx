import * as React from 'react'
import './index.css'
import store from "../../store/store";
import { Provider, connect } from 'react-redux'
import { Dispatch } from 'redux';
import { addCount } from "../../store/actions";
import * as Types from '../../store/type'
import { countState } from "../../store/store";
import Detail from "./components/detail";
interface IProps {
    count: number,
    addCount: typeof addCount
}
class About extends React.PureComponent<IProps, {}> {
    private handleClick = () => {
        this.props.addCount()
    }
    render() {
        // console.log(this.props)
        const { count } = this.props;

        // console.log(this.props)
        return (

            <div className='about'>
                <Provider store={store}>
                    <Detail></Detail>
                </Provider>

                <div className='about-button'>
                    <p>关于我们</p>
                    <div>{count}</div>
                    <button onClick={this.handleClick}>获取</button>
                </div>


            </div>
        )
    }
}
const mapStateToProps = (state: countState) => {
    // console.log(state)
    return {
        count: state.reducer.count
    }
}
// const mapDispathToProps = (dispatch: any) => {
//     return {
//         addCount() {
//             dispatch({
//                 type: Types.ADD_COUNT
//             })
//         }
//     }
// }

// export default connect(mapStateToProps, {
//     addCount
// })(About)
export default connect(mapStateToProps, {
    addCount
})(About)