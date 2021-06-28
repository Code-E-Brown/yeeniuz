import { getArtists } from "../../store/artists"
import { NavLink, Route, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './ArtistsList.css'
export const ArtistsList = () => {

    const dispatch = useDispatch();
    const artists = useSelector(state => {
        return state.artists.list;
    })

    useEffect(() => {
        dispatch(getArtists())
    }, [])

    return (
        <div>
            <div className='titleH1'>
                <h1>Artists</h1>
            </div>
            <div className='artistsContainer'>
                {artists.map(artist => (
                    <div className='artistCard'>
                        <div key={artist.id}>

                            <NavLink to={`artists/${artist.id}`}><div className='artistListImage' style={{ backgroundImage: `url(${artist.image})` }} />{artist.title}</NavLink>
                        </div>
                    </div>
                ))}
                {/* <ul>
                    {artists.map(artist => (
                        <li key={artist.id}>
                            <NavLink to={`artists/${artist.id}`}>{artist.title}</NavLink>
                        </li>
                    ))}
                </ul> */}
            </div>
        </div >

    )
}
