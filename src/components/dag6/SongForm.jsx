import React, { useState } from 'react';

const SongForm = () => {
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [date, setDate] = useState('');

    const [titleTouched, setTitleTouched] = useState(false);
    const [artistTouched, setArtistTouched] = useState(false);
    const [dateTouched, setDateTouched] = useState(false);

    // jfr computed property i Vue
    let [titleClass, titleError] = validateTitle(title);

    return (
        <div>
            <h3> Add song </h3>
            <div className="form-group">
                <label> Title </label>
                <input type="text" placeholder="Song title"
                    onChange={e => setTitle(e.target.value)}
                    onBlur={() => setTitleTouched(true)}
                    className={titleClass} />
                <div className="error">{titleError}</div>
            </div>

            <div className="form-group">
                <label> Artist </label>
                <input type="text" placeholder="Artist name" />
                <div className="error"></div>
            </div>

            <div className="form-group">
                <label> When was it composed </label>
                <input type="text" placeholder="Composed date"/>
                <div className="error"></div>
            </div>
        </div>
    )
};
/* [4] Bygg ett formulär där användaren ska fylla i en låttitel, artistens namn och vilket datum som låten skrevs. (Du kan använda filmer eller böcker i stället om du vill.) Det ska finnas en knapp med texten "lägg till" som bara är klickbar om man fyllt i allting korrekt. Använd samma valideringsprinciper som i uppgift 3a+b.*/

function validateTitle(title) {
    if( title.length > 0 ) {
        return ['valid', '']
    } else {
        return ['invalid', 'Please enter a title']
    }
}







export default SongForm;
