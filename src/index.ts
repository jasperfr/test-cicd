import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App';

console.log('pissy poopy');

document.addEventListener('DOMContentLoaded', function() {
  console.log('pissy shitty');
  ReactDOM.render(
    React.createElement(App),
    document.getElementById('root')
  );
});
