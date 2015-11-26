import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

var element = document.createElement('div');
document.body.appendChild(element);
element.setAttribute("id", "main");

ReactDOM.render(<App />, element);
ReactDOM.render(<App />, document.getElementById('main'));

