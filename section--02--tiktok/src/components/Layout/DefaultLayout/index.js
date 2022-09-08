import Header from '../components/Header';
import Sidebar from './Sidebar';


function DefaultLayout({ children }) {
    return (<>
        <Header />
        <main>
            <Sidebar />
            <section>{children}</section>
        </main>
    </>);
}

export default DefaultLayout;