import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomeView from './view/home/homeView'
import 'antd/dist/antd.css';
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <HomeView />
  </BrowserRouter>,
  document.getElementById('root')
);
