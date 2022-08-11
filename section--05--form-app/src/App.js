import { useState } from "react";

import ErrorModal from "./components/UI/ErrorModal";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";


function App() {
    const [inputName, setInputName] = useState('');
    const [inputAge, setInputAge] = useState('');
    const [list, setList] = useState([]);
    const [error, setError] = useState();

    const inputNameHandler = e => {
        setInputName(e.target.value);
    }

    const inputAgeHandler = e => {
        setInputAge(e.target.value);
    }

    const addHandler = e => {
        e.preventDefault();

        if (!inputName && !inputAge) {
            return setError({
                title: 'Invalid input',
                message: 'Please enter username & age!'
            });
        }
        if (!inputName) {
            return setError({
                title: 'Invalid input',
                message: 'Please enter username'
            });
        }
        if (!inputAge) {
            return setError({
                title: 'Invalid input',
                message: 'Please enter age'
            });
        }

        setList(prevList => {
            prevList.unshift({
                username: inputName,
                age: inputAge
            });
            return prevList;
        });

        setInputName('');
        setInputAge('');
    }

    const errorHandler = () => {
        setError(false);
    }

    return (
        <div>
            {error && <ErrorModal
                {...error}
                errorHandler={errorHandler}
            />
            }
            <AddUser
                inputName={inputName}
                inputAge={inputAge}
                inputNameHandler={inputNameHandler}
                inputAgeHandler={inputAgeHandler}
                addHandler={addHandler}
            />
            <UserList list={list} />
        </div>
    );
}

export default App;