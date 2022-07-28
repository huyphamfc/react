/*
useMemo only recompute the memoized value (re-execute a logic) when one of dependencies has changed
*/


import { useState, useMemo, useRef } from 'react';
import './App.css';


function App() {
    const [data, setData] = useState([]);
    const [product, setProduct] = useState('');
    const [price, setPrice] = useState('');

    const addHandler = e => {
        e.preventDefault();
        if (product && price) {
            setData([...data, { product: product, price: +price }]);
            setProduct('');
            setPrice('');
            ref.current.focus();
        }
    }

    const total = useMemo(
        () => data.reduce((sum, { price }) => sum + price, 0),
        [data]
    );

    const ref = useRef();

    return (
        <div>
            <form className='container'>
                <label>Product: </label>
                <input
                    ref={ref}
                    value={product}
                    onChange={e => setProduct(e.target.value)}
                />
                <label>Price: </label>
                <input
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                />
                <button onClick={addHandler}>Add</button>
            </form>
            <span>Total: {total}</span>
            <ul>
                {
                    data.map(({ product, price }, index) =>
                        <li key={index}>
                            {`${product} - ${price}`}
                        </li>
                    )
                }
            </ul>
        </div>
    );
}

export default App;