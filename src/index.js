
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {creatStore} from"redux"
import{reducer} from"../public/reducers/carReducer"
import {Provider} from "react-redux"
import 'bulma/css/bulma.css';
import './styles.scss';

const store = creatStore(reducer)
const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store ={store}><App /> </Provider>, rootElement);


