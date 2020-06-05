import React, { useState } from 'react';

const EditableSong = ({ song, changeSong }) => {
    const [title, setTitle] = useState(song.title);
    const [artist, setArtist] = useState(song.artist);
    const [date, setDate] = useState(song.date);
    const [editingTitle, setEditingTitle] = useState(false);
    const [editingArtist, setEditingArtist] = useState(false);
    const [editingDate, setEditingDate] = useState(false);

    const handleClickRow = () => {
        setEditingTitle(true);
        setEditingArtist(true);
        setEditingDate(true);
    }

    const handleBlurTitle = () => {
        changeSong(song, title, song.artist, song.date);
        setEditingTitle(false);
    }
    const handleBlurArtist = () => {
        changeSong(song, song.title, artist, song.date);
        setEditingArtist(false);
    }
    const handleBlurDate = () => {
        changeSong(song, song.title, song.artist, date);
        setEditingDate(false);
    }
    return (
        <div onClick={handleClickRow}>
            {editingTitle
                ? <input type="text" value={title}
                    onChange={e => setTitle(e.target.value)}
                    onBlur={handleBlurTitle} />
                : song.title}
            {' by '}
            {editingArtist
                ? <input type="text" value={artist}
                    onChange={e => setArtist(e.target.value)}
                    onBlur={handleBlurArtist} />
                : song.artist}
            {' ('}
            {editingDate
                ? <input type="text" value={date}
                    onChange={e => setDate(e.target.value)}
                    onBlur={handleBlurDate} />
                : song.date}
            )
        </div>
    )
};

export default EditableSong;
