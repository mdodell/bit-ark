import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/common/layout/App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {configureStore} from "./app/redux/store/configureStore";
import {BrowserRouter} from "react-router-dom";

const store = configureStore();

ReactDOM.render(
    (<Provider store={store}>
        <Fragment>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Fragment>
    </Provider>),
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
