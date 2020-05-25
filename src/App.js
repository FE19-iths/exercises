import React, { useState } from 'react';
import './App.css';
import Grandparent from './components/Grandparent';
import EvolvedCheckBox from './components/EvolvedCheckBox';
import Tag from './components/Tag';


function App() {
    const [index1, setIndex1] = useState(0);
    const [index2, setIndex2] = useState(0);
    const [selectedTag, setSelectedTag] = useState(0);

    const tags = [];
    for( let i=0; i<5; i++ ) {
        tags.push( <Tag key={i}
            selected={i === selectedTag}
            doSelect={() => setSelectedTag(i)} />
        );
    }
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

            <section> {tags} </section>
        </main>
        </div>
    );
}

export default App;
