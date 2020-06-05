import React, { useState, useEffect } from 'react';
import './App.css';
import Grandparent from './components/dag3/Grandparent';
import EvolvedCheckBox from './components/dag3/EvolvedCheckBox';
import Tag from './components/dag3/Tag';
import Notify from './components/dag4/Notify';
import HelloWorld from './components/dag6/HelloWorld';
import Calculator from './components/dag6/Calculator';
import SongForm from './components/dag6/SongForm';
import SongList from './components/dag6/SongList';
import Input from './components/dag6/Input';


function App() {
    const [index1, setIndex1] = useState(0);
    const [index2, setIndex2] = useState(0);
    const [selectedTag, setSelectedTag] = useState(0);
    const [songList, setSongList] = useState([]);
    const [weather, setWeather] = useState('');

    useEffect(() => {
        // A more realistic app would fetch the data from an API
        setSongList( getDefaultSongs() );
    }, []);

    const addSong = song => {
        setSongList([ ...songList, song ]);
    }

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
                <SongForm addSong={addSong} />
                <SongList songs={songList} />
            </section>
            <section>
                <Input value={weather} label="How is the weather?"
                    placeholder="Sunny"
                    doValidate={validateWeather}
                    handleChange={e => setWeather(e.target.value)} />
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

function validateWeather(value) {
    if( value !== '' ) {
        return ['valid', ''];
    } else {
        return ['invalid', 'Please tell me about the weather']
    }
}
function getDefaultSongs() {
    return [
        { title: 'Starman', artist: 'David Bowie', date: '1972' },
        { title: 'Pippi', artist: 'Dree Low', date: '2019' },
        { title: 'Blue', artist: 'Eiffel 65', date: '1998' },
        { title: 'Blue', artist: 'Joni Mitchell', date: '1971' },
        { title: 'Both sides now', artist: 'Joni Mitchell', date: '1969' },
        { title: 'Enjoy the silence', artist: 'Depeche Mode', date: '1990' },
        { title: 'Raindrop Prelude', artist: 'Frederic Chopin', date: '?' },
        { title: 'Better', artist: 'Khalid', date: '2018' },
        { title: 'Hotel California', artist: 'The Eagles', date: '1977' },
    ];
}

export default App;
