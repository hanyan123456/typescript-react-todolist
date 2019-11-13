import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// const { Provider } = require('react-redux');
import { Provider } from "react-redux"
// import configureStore from './redux/stores';
// import configureStore from './redux/stores';
import Home from './pages/home'
import About from './pages/about'
import TopMenu from './pages/component/topMenu'
// const store = configureStore();
import store from "./store/store";
const App: React.FC = () => {
  // console.log(store)
  return (

    <Provider store={store}>
      <BrowserRouter>
        <TopMenu></TopMenu>
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/about' exact component={About}></Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );


}

export default App;
