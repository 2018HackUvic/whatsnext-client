/*
 src/index.js
*/
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store';
import {
    Route,
    Switch
} from 'react-router';
import {
    BrowserRouter as Router
} from 'react-router-dom';
import './index.css';
import App from './App';
import Auth from './containers/Auth';
import ToDoList from './containers/ToDoList';
import Login from './containers/Login/Login';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
 <Provider store={configureStore()}>
    < Router>
    <Switch>
        <Route exact path="/" component = {App} />
        <Route exact path="/auth" component = {Auth} /> 
        <Route exact path="/login" component = {Login} /> 
        <Route exact path="/todoList" component = {ToDoList}/>
    </Switch>
    </Router>
 </Provider>,
 document.getElementById('root')
);
registerServiceWorker();