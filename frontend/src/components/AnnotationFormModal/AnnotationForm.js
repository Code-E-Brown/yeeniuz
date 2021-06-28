import React, { useEffect, useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { getOneSong } from '../../store/songs';
import { createAnnotation, getAnnotationsForSong } from '../../store/annotations';
import './AnnotationForm.css'



function AnnotationForm({ selection, fullLine, songId, closeModal }) {
    const [annotationText, setAnnotationText] = useState('')

    // console.log(selection, fullLine, songId, editButton)
    // console.log(props)


    // const closeModal = () => {
    //     setShowModal(false)
    // }

    const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(getAnnotationsForSong(+songId))
    // }, [])
    const editButton = async (e) => {
        e.preventDefault();
        songId = +songId

        const data = {
            selection,
            fullLine,
            songId,
            annotationText
        }
        console.log('this is your payload', data)

        if (data) {
            const newAnnotation = await dispatch(createAnnotation(data))
            await dispatch(getOneSong(songId))
            await dispatch(getAnnotationsForSong(+songId))
            // setReloader(!reloader)
            // console.log(newAnnotation)
            closeModal()
        }
    }



    return (
        <div className='modalDiv'>
            <form className='annotationForm'>
                <label>Annotation</label>
                <input onChange={e => setAnnotationText(e.target.value)} value={annotationText} type='text'></input>
            </form>
            <button onClick={editButton} type='submit'>Submit</button>
        </div >
    )
}

export default AnnotationForm;
