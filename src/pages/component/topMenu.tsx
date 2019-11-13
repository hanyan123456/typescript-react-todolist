import * as React from 'react'
import { NavLink } from 'react-router-dom';
import './topMenu.css'
export default class TopMenu extends React.Component {
    render() {
        return (
            <div className='topMenu'>
                <div className='topMenu-item'> <NavLink to='/'>首页</NavLink></div>
                <div className='topMenu-item'> <NavLink to='/about'>关于</NavLink></div>
            </div>
        )
    }
}