import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

const Form = {
  Input() {
    return <input />
  },
  Checkbox() {
    return <input type="checkbox" />
  }
}

function FormContainer() {
  const inputType = 'Input';
  const VirtualComponent = Form[inputType];

  return (
    <div id="wrapper">
      <VirtualComponent />
      <Form.Checkbox />
    </div>
  )
}

function Button({
  title,
  href,
  onClick
}) {
  let VirtualComponent = 'button';
  const props = {};
  if (href) {
    props.href = href;
    VirtualComponent = 'a'
  }
  if (onClick) props.onClick = onClick;

  return (
    <VirtualComponent {...props}>
      {title}
    </VirtualComponent>
  )
}

function RenderButton() {
  return (
    <div id="wrapper">
      <Button
        title="Click me!"
        onClick={() =>
          console.log('This is an event')
        }
      // href="https://www.google.com/"
      />
    </div>
  );
}

// const heading = React.createElement(
//   'h1',
//   {},
//   'Text'
// )
// => Children Props

function Heading(props = {}) {
  console.log(props);
  return (
    <h1>
      Props.children is {props.children}
    </h1>
  )
}

root.render(<Heading>Text</Heading>);