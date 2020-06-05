import React, { useState } from 'react';


const SongList = ({ songs }) => {
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
            <div>
                {filteredList.map(song => (
                    <div key={song.title + song.artist}>
                        {song.title} by {song.artist} ({song.date})
                    </div>
                ))}
            </div>
        </div>
    )
};

export default SongList;
