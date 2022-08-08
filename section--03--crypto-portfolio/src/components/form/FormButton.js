import { Button } from '../buttons';

import './FormButton.css';


function FormButton() {
    return (
        <div className="form__button">
            <Button sub='true'>Cancel</Button>
            <Button submit='true'>Add Investment</Button>
        </div>
    );
}

export default FormButton;