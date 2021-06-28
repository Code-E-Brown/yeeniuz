
import { csrfFetch } from './csrf';
const GET_ANNOTATIONS = 'song/annotation'

const singleSongAnnotation = (annotations) => ({
    type: GET_ANNOTATIONS,
    annotations,
})

export const getAnnotationsForSong = (songId) => async dispatch => {
    // console.log('heres your song id', songId)
    const response = await csrfFetch(`/api/songs/${songId}/annotations`)

    if (response.ok) {
        let annotations = await response.json()
        // console.log('youre in the fetcher', annotations)
        await dispatch(singleSongAnnotation(annotations))
    }
}


export const createAnnotation = (payload => async dispatch => {
    const response = await csrfFetch(`/api/songs/${payload.songId}/annotations`, {
        method: "POST",
        body: JSON.stringify(payload)
    })
    if (response.ok) {
        let json = await response.json()
        // if (json) {
        //     return json;
        // }
    }

})

export const createPrimaryAnnotationUpvote = (songId, annotationId) => async dispatch => {

    const response = await csrfFetch(`/api/songs/${songId}/annotations/${annotationId}`, {
        method: "POST",
        body: JSON.stringify({ annotationId })
    })

    if (response.ok) {
        let upVote = await response.json()
        await dispatch(getAnnotationsForSong(songId))
    }

}

export const deletePrimaryAnnotation = (songId, annotationId) => async dispatch => {
    const response = await csrfFetch(`/api/songs/${songId}/annotations/${annotationId}`, {
        method: "DELETE"
    })

    if (response.ok) {
        let json = response.json();
    }
}

const initialState = {}

const annotationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ANNOTATIONS: {
            const annotationsForSong = {}
            action.annotations.map(annotation => {
                annotationsForSong[annotation.id] = annotation
            })
            return {
                ...annotationsForSong,
                // ...state temp
            }
        }
        default:
            return state;
    }
}
export default annotationsReducer;
