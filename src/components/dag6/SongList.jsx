import React, { useState } from 'react';
import EditableSong from './EditableSong';


const SongList = ({ songs, changeSong }) => {
    const [searchString, setSearchString] = useState('');
    const filteredList = songs.filter(song => {
        const search = searchString.toLowerCase();
        let titleMatches  = song.title.toLowerCase().includes(search)
        let artistMatches = song.artist.toLowerCase().includes(search)
        let dateMatches   = song.date.toLowerCase().includes(search)
        return titleMatches || artistMatches || dateMatches;
    });

    return (
        <div>
            <input type="text" placeholder="Search for a song..."
                onChange={e => setSearchString(e.target.value)} />
            <div className="song-list">
                {filteredList.map(song => (
                    <EditableSong key={song.title + song.artist}
                        song={song}
                        changeSong={changeSong}/>
                ))}
            </div>
        </div>
    )
};

/*
[9] Gör en lista som i uppgift 6, där man kan klicka på ett element för att ändra det. Varje element ska ha minst två olika värden. Till exempel: låttitel och artist. När man klickat på ett värde ska texten bytas ut mot ett textfält. När man lämnar textfältet (onBlur) ska det nya värdet sparas i listan.
*/

export default SongList;
