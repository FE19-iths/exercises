import React from 'react';
import './App.css';
import Grandparent from './components/Grandparent';

function App() {
    return (
        <div className="App">
        <header className="App-header">
            <h1>Exercises</h1>
        </header>
        <main>
            <Grandparent />
        </main>
        </div>
    );
}

export default App;
