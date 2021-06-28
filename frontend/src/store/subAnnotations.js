
import { csrfFetch } from './csrf';

const GET_SUBANNOTATIONS = 'song/subannotation'
const ADD_ONE = 'song/addSubannotation'

const addOneSubAnnotation = (subAnnotation) => ({
    type: GET_SUBANNOTATIONS,
    subAnnotation
})

const singleSongSubAnnotations = (subAnnotations) => ({
    type: GET_SUBANNOTATIONS,
    subAnnotations
})

export const getSubAnnotationsForSong = (songId, primaryAnnotationId) => async dispatch => {
    // console.log('here are your goodies', songId, primaryAnnotationId)
    const response = await csrfFetch(`/api/songs/${songId}/annotations/${primaryAnnotationId}/subannotations`)

    if (response.ok) {
        const subAnnotations = await response.json()
        // console.log('subAnnotations!!!!!!!', subAnnotations)
        await dispatch(singleSongSubAnnotations(subAnnotations))
    }
}

export const createSubAnnotation = (payload, songId, primaryAnnotationId) => async dispatch => {
    // console.log('totally in it', payload, songId, primaryAnnotationId)
    const response = await csrfFetch(`/api/songs/${songId}/annotations/${primaryAnnotationId}/subannotations`, {
        method: "POST",
        body: JSON.stringify(payload)
    })
    if (response.ok) {
        let subAnnotation = await response.json()
        // console.log("good work", subAnnotation)
        // await dispatch(addOneSubAnnotation(subAnnotation))
    }
    // if (subAnnotation) {
    //     return subAnnotation;
    // }
}

export const createSubAnnotationUpvote = (subAnnotationId) => async dispatch => {
    // console.log('you made it B!!!!!!!!!!!!!!! heres that Id you needed G', typeof subAnnotationId)
    // const response = await csrfFetch('/api/test', {
    //     method: "POST",
    //     body: JSON.stringify(subAnnotationId)
    // })
    const response = await csrfFetch('/api/subannotationupvotes', {
        method: "POST",
        body: JSON.stringify({ subAnnotationId })
    })

    if (response.ok) {
        let upVote = await response.json()
        // console.log('heres your finished upvote', upVote)
    }
}

export const deleteSubAnnotation = (subAnnotationId) => async dispatch => {
    // console.log(typeof +subAnnotationId)
    const response = await csrfFetch(`/api/subannotations/${+subAnnotationId}`, {
        method: "DELETE"
    })

    if (response.ok) {
        await response.json()
        // console.log('heres your finished upvote', upVote)
    }
}


const initialState = {}

const subAnnotationsReducer = (state = initialState, action) => {
    console.log('heres your action', action)
    switch (action.type) {
        case GET_SUBANNOTATIONS: {
            const subAnnotationsForSong = {}
            action.subAnnotations.map(annotation => {
                subAnnotationsForSong[annotation.id] = annotation
            })
            return {
                ...subAnnotationsForSong,
            }
        }
        // case ADD_ONE: {
        //     if (!state[action.subAnnotation.id]) {
        //         const newState = {
        //             ...state,
        //             [action.subAnnotation.id]: action.subAnnotation
        //         }
        //         return newState
        //     }
        // }
        default:
            return state;
    }
}

export default subAnnotationsReducer;
