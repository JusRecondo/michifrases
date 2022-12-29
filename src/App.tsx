import { Routes, Route } from 'react-router-dom';
import EditPage from './pages/EditPage/EditPage';
import Home from './pages/Home/Home';
import './styles/App.scss';
import '98.css';
import NotFound from './pages/NotFound/NotFound';

function App() {
    return (
        <div className="app">
            <header>
                <h1 className="h1">michifrases.exe</h1>
                <hr />
                <p>Indispensable web para crear fotos de michis con frases.</p>
            </header>
            <main>
                <Routes>
                    <Route path="/michifrases" element={<Home />} />
                    <Route
                        path="/michifrases/edit-cat/:id"
                        element={<EditPage />}
                    />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
