import { csrfFetch } from './csrf';
const LOAD = 'artists/LOAD'
const ADD_ONE = 'artists/ADD_ONE'

const load = (artists) => ({
    type: LOAD,
    artists,
})
const addOneArtist = (artist) => ({
    type: ADD_ONE,
    artist,
})

export const changeArtistImage = (payload, id) => async dispatch => {
    // console.log(payload, +id)
    const response = await csrfFetch(`/api/artists/${+id}`, {
        method: "PATCH",
        body: JSON.stringify(payload),
    })
    // if (response.ok) {
    //     const json = response.json()
    // }
}

export const getArtists = () => async dispatch => {
    const response = await fetch('/api/artists')

    if (response.ok) {
        const artists = await response.json();
        await dispatch(load(artists))
    }

}

export const getOneArtist = (id) => async dispatch => {
    const response = await fetch(`/api/artists/${id}`)

    if (response.ok) {

        const artistDetails = await response.json();
        // console.log('we know', artistDetails)
        await dispatch(addOneArtist(artistDetails))
    }
}

export const createArtist = (payload) => async dispatch => {
    if (typeof payload.by === "number") {
        const response = await csrfFetch(`/api/artists/${payload.by}`, {
            method: "POST",
            body: JSON.stringify(payload),
            // headers: { "Content-Type": "application/json" }
        })
        if (response.ok) {
            const newSong = await response.json()
            return newSong

        }
    } else {
        const response = await csrfFetch(`/api/artists`, {
            method: "POST",
            body: JSON.stringify(payload),
        })
        if (response.ok) {
            const newArtist = await response.json()
            // console.log('here you are!!', newArtist)
            if (newArtist) {
                const res = await csrfFetch(`/api/artists/${newArtist.id}`, {
                    method: "POST",
                    body: JSON.stringify(payload),
                    // headers: { "Content-Type": "application/json" }
                })
                if (res.ok) {
                    const newSong = await res.json()
                    return newSong
                }
            }


            // if (response.ok) {
            //     const artists = await res.json();
            //     // await dispatch(load(artists))
            // }
            // if (newArtist) {
            //     await dispatch(load(artists))
            //     // const res = await csrfFetch('/api/songs', {
            //     //     method: "POST",
            //     //     body: JSON.stringify(payload),
            //     // })
            // }
        }
    }

    // if (response.ok) {
    //     const newArtist = await response.json()
    //     console.log(newArtist)
    //     // dispatch(addOneArtist(newArtist.id))
    //     return newArtist
    // }

}

const initialState = { list: [] }

const artistsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD: {
            const allArtists = {}
            // console.log(action)
            // console.log('look dood', action.artists.artists)
            action.artists.map(artist => {
                allArtists[artist.id] = artist;
            })
            return {
                ...allArtists,
                ...state,
                list: action.artists
            }
        }
        case ADD_ONE: {
            // if (!state.action.artist.id) {
            //     const newState = {
            //         ...state,
            //         [action.artist.id]: action.artist
            //     }
            //     const artistsList = newState.list.map(id => newState[id])
            //     artistsList.push(action.artist)
            //     return newState;
            // }
            return {
                ...state,
                [action.artist.id]: {
                    ...state[action.artist.id],
                    ...action.artist,
                }
            }
        }
        default:
            return state;
    }
}


export default artistsReducer;
