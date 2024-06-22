import { Fragment, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from './components/Layout';

function App() {
    const [modal, setModal] = useState();

    const [dataList, setDataList] = useState([]);

    const addList = (data) => {
        setDataList((prevStatus) => [...prevStatus, data]);
    };

    const handleModal = (modal, data) => {
        const M = modal;

        setModal(<M onClick={handleModal} al={addList} data={data} />);
    };

    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, key) => {
                        const Layout = route.layout === null ? Fragment : route.layout ? route.layout : DefaultLayout;
                        const Page = route.component;
                        const hidden_btn = Page.name === 'Book' ? true : false;
                        return (
                            <Route
                                key={key}
                                path={route.path}
                                element={
                                    <Layout modal={modal} onClick={handleModal} hidden_btn={hidden_btn} list={dataList}>
                                        <Page onClick={handleModal} list={dataList} />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
