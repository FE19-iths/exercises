import React, { useState } from 'react';
import './App.css';
import Grandparent from './components/dag3/Grandparent';
import EvolvedCheckBox from './components/dag3/EvolvedCheckBox';
import Tag from './components/dag3/Tag';
import Notify from './components/dag4/Notify';
import HelloWorld from './components/dag6/HelloWorld';
import Calculator from './components/dag6/Calculator';
import SongForm from './components/dag6/SongForm';


function App() {
    const [index1, setIndex1] = useState(0);
    const [index2, setIndex2] = useState(0);
    const [selectedTag, setSelectedTag] = useState(0);

    const tags = [];
    for( let i=0; i<5; i++ ) {
        // Generate 5 elements. Only one can be selected at a time.
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
            <section>
                <HelloWorld />
                <Calculator />
            </section>
            <section>
                <SongForm />
            </section>

            <section> <Notify content="Example notification" /> </section>
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
