import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const content =
  <div className='container'>
    <h1 className='heading'>Head First ReactJS</h1>
    <p>- huyphamfc -</p>
  </div>

// const content = React.createElement(
//   'div',
//   {
//     className: 'container'
//   },
//   React.createElement('h1', { className: 'heading' }, 'Head First ReactJS :))'),
//   React.createElement('p', {}, '- huyphamfc -')
// )

root.render(content);