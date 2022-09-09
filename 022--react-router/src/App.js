import { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import { DefaultLayout } from './components/Layout';
import { publicRoutes } from './routes';
import './App.css';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                {publicRoutes.map((route, index) => {
                    let Layout = DefaultLayout;
                    if (route.layout) Layout = route.layout;
                    if (route.layout === null) Layout = Fragment;

                    const Content = route.component;

                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Content />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </BrowserRouter>
    );
}

export default App;