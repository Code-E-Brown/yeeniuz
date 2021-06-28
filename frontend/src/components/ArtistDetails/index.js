import { getOneArtist } from '../../store/artists';
import { NavLink, Route, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './ArtistDetails.css';
import EditArtistImageModal from '../EditArtistImageModal';
// import { Modal } from '../../context/Modal';

export const ArtistsDetails = () => {
    const [editImageButton, setEditImageButton] = useState(false)
    const { id } = useParams();
    // console.log(id)
    const dispatch = useDispatch()

    const artist = useSelector(state => state.artists[+id])
    useEffect(() => {
        dispatch(getOneArtist(id))
    }, [id]);

    const flipEditImageButton = (e) => {
        e.preventDefault()
        setEditImageButton(!editImageButton)
    }
    if (artist) {

        return (
            <div className='outerBox'>
                <div className='artistDetails'>
                    {/* <img className='artistImage' src={artist.image} alt="Artist Image" /> */}
                    <div className='artistImage' onClick={flipEditImageButton} style={{ backgroundImage: `url(${artist.image})` }} />

                </div>
                {editImageButton ? <EditArtistImageModal id={id} /> : null}
                <div className='songsDiv'>
                    <h1 className='artistName'>{artist.title}</h1>
                    {/* <ul>
                        {artist.Songs &&
                            artist.Songs.map(song => (
                                <li key={song.id} >
                                <NavLink to={`/songs/${song.id}`}>{song.title}</NavLink>
                                </li>
                                ))}
                            </ul> */}
                    <div className="search">
                        <input className="search__text" type="text" name="" placeholder="Type to search for something" />
                        <a href="#" className="search__button"><i className="fas fa-search"></i></a>
                    </div>
                    <h1>Songs:</h1>
                    {artist.Songs &&
                        artist.Songs.map(song => (
                            <NavLink key={song.id} to={`/songs/${song.id}`}>
                                <div className="songCard">
                                    {song.title}
                                </div>
                            </NavLink>
                        ))}
                </div>
            </div >
        );
    } else {
        return null;
    }
}
