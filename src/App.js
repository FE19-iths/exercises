import React, { useState } from 'react';
import './App.css';
import Grandparent from './components/Grandparent';
import EvolvedCheckBox from './components/EvolvedCheckBox';


function App() {
    const [index1, setIndex1] = useState(0);
    const [index2, setIndex2] = useState(0);
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
                    ]}
                    index={index1}
                    setIndex={setIndex1}> Octopus or not? </EvolvedCheckBox>
                <br/>
                <EvolvedCheckBox
                    items={[
                        { symbol: "🍌", label: 'banana' },
                        { symbol: "🥗", label: 'salad' },
                        { symbol: "🥦", label: 'broccoli' },
                        { symbol: "🎂", label: 'cake' }
                    ]}
                    index={index2}
                    setIndex={setIndex2}> What should we eat? </EvolvedCheckBox>
            </section>
        </main>
        </div>
    );
}

export default App;
