import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { changeArtistImage } from '../../store/artists';
import { useDispatch } from 'react-redux';

function EditArtistImageForm({ closeModal, id }) {
    const [inputText, setInputText] = useState('')
    const dispatch = useDispatch()

    // console.log(id)
    const submitButton = (e) => {
        // e.preventDefault()
        const data = {
            inputText
        }
        dispatch(changeArtistImage(data, id))
    }

    return (
        <div className='modalDiv'>
            <form className='annotationForm'>
                <label>Image Url</label>
                <input value={inputText} onChange={e => setInputText(e.target.value)} type='text'></input>
            </form>
            <a href={`/artists/${+id}`}>
                <button onClick={submitButton} type='submit'>Submit</button>
            </a>
        </div >
    )
}
export default EditArtistImageForm;
