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

root.render(<FormContainer />);