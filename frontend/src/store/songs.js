import { csrfFetch } from "./csrf";

export const ONE_SONG = "songs/ONE_SONG"

const loadOne = (song) => ({
    type: ONE_SONG,
    song,
})


export const getOneSong = (songId) => async dispatch => {
    // console.log('here', songId)
    const response = await fetch(`/api/songs/${songId}`)

    if (response.ok) {
        const song = await response.json();
        dispatch(loadOne(song))
    }
}

export const changeAlbumImage = (payload, songId) => async dispatch => {
    // console.log('you made it')
    const response = await csrfFetch(`/api/songs/${+songId}`, {
        method: "PATCH",
        body: JSON.stringify(payload),
    })
}

const initialState = {}

const songsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ONE_SONG: {
            // console.log('here you are', action.song)
            return {
                ...state,
                [action.song.id]: {
                    ...state[action.song.id],
                    ...action.song
                }
            }
        }
        default:
            return state;
    }
}



export default songsReducer;
