import { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";


function App() {
    const [inputName, setInputName] = useState('');
    const [inputAge, setInputAge] = useState('');
    const [list, setList] = useState([]);

    const inputNameHandler = e => {
        setInputName(e.target.value);
    }

    const inputAgeHandler = e => {
        setInputAge(e.target.value);
    }

    const addHandler = e => {
        e.preventDefault();
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

    return (
        <div>
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