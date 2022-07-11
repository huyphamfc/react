import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

function Header() {
  return (
    <div>
      <h1>HEADING</h1>
      <p>Title</p>
    </div>
  )
}

class Content extends React.Component {
  render() {
    return (
      <div>
        <p>This is content 1</p>
        <p>This is content 2</p>
      </div>
    )
  }
}

const layout = (
  <div>
    <Header />
    <Content />
    <footer>This is footer</footer>
  </div>
)

// root.render([<Header />, <Content />]);
// root.render(layout);