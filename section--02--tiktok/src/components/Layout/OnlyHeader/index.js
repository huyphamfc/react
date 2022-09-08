import Header from '../components/Header';


function DefaultLayout({ children }) {
    return (<>
        <Header />
        <main>
            <section>{children}</section>
        </main>
    </>);
}

export default DefaultLayout;