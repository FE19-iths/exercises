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
                <EvolvedCheckBox
                    items={[
                        { symbol: "❓", label: 'question' },
                        { symbol: "🐙", label: 'octopus' }
                    ]}> Octopus or not? </EvolvedCheckBox>
                <br/>
                <EvolvedCheckBox
                    items={[
                        { symbol: "🍌", label: 'banana' },
                        { symbol: "🥗", label: 'salad' },
                        { symbol: "🥦", label: 'broccoli' },
                        { symbol: "🎂", label: 'cake' }
                    ]}> What should we eat? </EvolvedCheckBox>
            </section>
        </main>
        </div>
    );
}

export default App;
