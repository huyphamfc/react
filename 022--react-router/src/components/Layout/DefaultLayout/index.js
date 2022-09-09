import Header from '../components/Header';
import Sidebar from './Sidebar';


function DefaultLayout({ children }) {
    return (<>
        <Header />
        <main className='main'>
            <Sidebar />
            {children}
        </main>
    </>);
}

export default DefaultLayout;