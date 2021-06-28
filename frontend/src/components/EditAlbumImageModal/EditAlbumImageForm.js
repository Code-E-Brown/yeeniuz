import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeAlbumImage } from '../../store/songs';

function EditAlbumImageForm({ closeModal, specificSongId }) {
    const [inputText, setInputText] = useState('')
    const dispatch = useDispatch()

    // console.log(id)
    const submitButton = (e) => {
        // e.preventDefault()
        const data = {
            inputText
        }
        // console.log('datatatatat', data)
        dispatch(changeAlbumImage(data, specificSongId))
    }

    return (
        <div className='modalDiv'>
            <form className='annotationForm'>
                <label>Image Url</label>
                <input value={inputText} onChange={e => setInputText(e.target.value)} type='text'></input>
            </form>
            <a href={`/songs/${+specificSongId}`}>
                <button onClick={submitButton} type='submit'>Submit</button>
            </a>
        </div >
    )
}
export default EditAlbumImageForm;
