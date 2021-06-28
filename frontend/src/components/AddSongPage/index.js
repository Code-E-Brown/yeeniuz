import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, Redirect } from 'react-router-dom'
import { getArtists } from "../../store/artists"
import { createArtist } from '../../store/artists';

// import ReactQuill from 'react-quill';

import 'react-quill/dist/quill.snow.css';

import './AddSongPage.css'

import { Editor, CustomToolbar, Final } from '../Quill';


export const AddSongPage = () => {

    const dispatch = useDispatch()

    const history = useHistory();
    const [by, setBy] = useState('')
    const [title, setTitle] = useState('')
    const [tag, setTag] = useState('')
    const [lyrics, setLyrics] = useState('')
    const [albumImage, setAlbumImage] = useState('')
    const [youtubeLink, setYoutubeLink] = useState('')
    const [validationErrors, setValidationErrors] = useState([])

    const sessionUser = useSelector((state) => state.session.user);
    const artists = useSelector(state => {
        return state.artists.list
    })


    useEffect(() => {
        dispatch(getArtists())
    }, [])

    // console.log(artists)
    useEffect(() => {
        // let errors = []
        let emptyString = '         '
        if (by.trim() === emptyString.trim()) setBy('')
        // if (by === '') errors.push("Enter an artist name")
        if (title.trim() === emptyString.trim()) setTitle('')
        // if (title === '') errors.push("Enter title")
        // if ((tag === '') || (!tag)) errors.push("Select tag. If unsure, select 'other'")
        // if ((lyrics === '') || (!lyrics)) errors.push("Enter Lyrics")
        if (youtubeLink.trim() === emptyString.trim()) setYoutubeLink('')
        if (albumImage.trim() === emptyString.trim()) setAlbumImage('')
        // setValidationErrors(errors)
    }, [by, title, tag, lyrics, youtubeLink, albumImage])

    const submitButton = async (e) => {

        e.preventDefault()
        let errors = []

        let emptyString = '         '
        if (by.trim() === emptyString.trim()) setBy('')
        if (by === '') errors.push("Enter an artist name")
        if (title.trim() === emptyString.trim()) setTitle('')
        if (title === '') errors.push("Enter title")
        if ((tag === '') || (!tag)) errors.push("Select tag. If unsure, select 'other'")
        if ((lyrics === '') || (!lyrics)) errors.push("Enter Lyrics")
        if (youtubeLink.trim() === emptyString.trim()) setYoutubeLink('')

        if (albumImage.trim() === emptyString.trim()) setAlbumImage('')

        const existingArtist = artists.find(artist => artist.title === by)
        if (existingArtist) {
            let existingSong = existingArtist.Songs.find(song => song.title === title)
            if (existingSong) errors.push('This song already exists by this artist')
        }

        if (errors) {
            setValidationErrors(errors)
        }
        const data = {
            by: existingArtist ? existingArtist.id : by,
            title,
            tag,
            lyrics,
            albumImage,
            youtubeLink
        }

        if (errors.length === 0) {
            if (existingArtist) {

                // console.log(data)
                // await dispatch(createArtist(data))
                const newSong = await dispatch(createArtist(data))
                // console.log('boommmy', newSong)
                // if (existingArtist.id)
                history.push(`/songs/${newSong.id}`)
            } else {
                const newArtistNewSong = await dispatch(createArtist(data))
                // console.log('new artist with new song!!',newArtistNewSong)
                history.push(`/songs/${newArtistNewSong.id}`)
            }
        }

    }


    if (!sessionUser) return <Redirect to="/" />;

    return (
        <div className='addSong__form'>
            <h1>Add Song</h1>
            <ul className="errors">
                {!validationErrors.length ? null : validationErrors.map((error, i) => (
                    <p key={i}>{error}</p>
                ))}
            </ul>
            <h2 className='tagLabel'>
                Primary Info:
            </h2>
            <form onSubmit={submitButton}>
                <div className='formBlock'>
                    <label htmlFor='by'>By:</label>
                    <input className='normalInput'
                        onChange={(e) => setBy(e.target.value)}
                        id='by' value={by} type='text' placeholder='The primary artist, author, creator, etc.'></input>
                </div>
                <div className='formBlock'>
                    <label htmlFor='title'>Title:</label>
                    <input className='normalInput' id='title'
                        onChange={(e) => setTitle(e.target.value)}
                        value={title} type='text' placeholder='Title'></input>
                </div>
                <label className='tagLabel'>Tag</label>
                <div className='radioDiv'>
                    {/* <label className='radioLabel'>Primary Tag: */}
                    <input
                        onChange={(e) => setTag(e.target.value)}
                        type='radio'
                        name='tag'
                        value='rap'
                    />Rap
                    <input
                        onChange={(e) => setTag(e.target.value)}
                        type='radio'
                        name='tag'
                        value='pop'
                    />Pop
                    <input
                        onChange={(e) => setTag(e.target.value)}
                        type='radio'
                        name='tag'
                        value='r&b'
                    />R&B
                    <input
                        onChange={(e) => setTag(e.target.value)}
                        type='radio'
                        name='tag'
                        value='rock'
                    />Rock
                    <input
                        onChange={(e) => setTag(e.target.value)}
                        type='radio'
                        name='tag'
                        value='country'
                    />Country
                    <input
                        onChange={(e) => setTag(e.target.value)}
                        type='radio'
                        name='tag'
                        value='gospel'
                    />Gospel
                    <input
                        onChange={(e) => setTag(e.target.value)}
                        type='radio'
                        name='tag'
                        value='other'
                    />Other
                    {/* </label> */}
                </div>
                {/* <div>
                    <label htmlFor='lyrics'>Lyrics</label>
                    <textarea
                        onChange={(e) => setLyrics(e.target.value)}
                        value={lyrics} id="lyrics"
                        rows="20" cols="40">
                    </textarea>
                </div> */}
                <div className='quillBlock'>
                    <label className='tagLabel'>Lyrics</label>
                    {/* <Editor className="quill" onChange={(e) => setLyrics(e)} value={lyrics} /> */}
                    <Editor lyrics={lyrics} setLyrics={setLyrics} />
                    {/* <ReactQuill className="quill" onChange={(e) => setLyrics(e)} value={lyrics} /> */}
                </div>
                {/* <div contentEditable='true' dangerouslySetInnerHTML={{ __html: lyrics }}>

                </div> */}
                <div className='addSong__lowerSection'>
                    <h3 className='tagLabel'>
                        Optional:
                    </h3>
                    <div className='formBlock'>
                        <label htmlFor='albumImage'>Album Image URL:</label>
                        <input className='normalInput' value={albumImage}
                            onChange={(e) => setAlbumImage(e.target.value)}
                            id='albumImage' type='text'></input>
                    </div>
                    <div className='formBlock'>
                        <label htmlFor='youtubeLink'>Youtube URL:</label>
                        <input className='normalInput' value={youtubeLink}
                            onChange={(e) => setYoutubeLink(e.target.value)}
                            id='youtubeLink' type='text'></input>
                    </div>
                    <div>
                        <button className='formButton' type='submit'>Submit</button>
                    </div>
                </div>
            </form>
        </div >
    )
}
