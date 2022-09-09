import Header from '../components/Header';


function HeaderOnly({ children }) {
    return (<>
        <Header />
        <main className='main'>
            {children}
        </main>
    </>);
}

export default HeaderOnly;