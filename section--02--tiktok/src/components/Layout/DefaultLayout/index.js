import Header from '../components/Header';
import Sidebar from './Sidebar';

import classes from './DefaultLayout.module.scss';


function DefaultLayout({ children }) {
    return (<>
        <Header />
        <main className={classes.main}>
            <Sidebar className={classes.main__sidebar} />
            <section className={classes.main__content}>
                {children}
            </section>
        </main>
    </>);
}

export default DefaultLayout;