import { useState } from 'react';

import Modal from './Modal';
import './App.css';


function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openHandler = () => {
        setIsModalOpen(true);
    }

    const closeHandler = () => {
        setIsModalOpen(false);
    }

    return (
        <section>
            Some content ...
            <button onClick={openHandler}>
                Open Modal
            </button>
            {
                isModalOpen &&
                <Modal closeModal={closeHandler} />
            }
        </section>
    );
}

export default App;