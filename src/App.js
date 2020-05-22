import React from 'react';
import './App.css';
import Grandparent from './components/Grandparent';
import EvolvedCheckBox from './components/EvolvedCheckBox';


function App() {
    return (
        <div className="App">
        <header className="App-header">
            <h1>Exercises</h1>
        </header>
        <main>
            <section> <Grandparent /> </section>
            <section>
                <EvolvedCheckBox symbol1="❓" label1="question" symbol2="🐙" label2="octopus"> Octopus or not? </EvolvedCheckBox>
                <br/>
                <EvolvedCheckBox symbol1="🍌" label1="banana" symbol2="🥗" label2="salad"> Monkey lunch? </EvolvedCheckBox>
            </section>
        </main>
        </div>
    );
}

export default App;
