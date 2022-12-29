import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EditPage from './pages/EditPage/EditPage';
import Home from './pages/Home/Home';
import './styles/App.scss';

function App() {
    return (
        <BrowserRouter>
            <header>
                <h1>Michi Frases</h1>
                <h2>App para crear fotos de gatitos con frases</h2>
            </header>
            <main>
                <Routes>
                    <Route path="/michifrases" element={<Home />} />
                    <Route path="/edit-cat/:id" element={<EditPage />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App;
