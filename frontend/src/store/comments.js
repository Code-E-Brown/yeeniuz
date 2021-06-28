const LOAD = 'comments/LOAD'

const load = (comments) => ({
    type: LOAD,
    comments
})

export const getComments = (id) => async dispatch => {
    const response = await fetch(`/api/songs/${id}/comments`)

    if (response.ok) {
        const comments = await response.json();
        console.log('comments:', comments)
        await dispatch(load(comments))
    }
}

const initialState = []
const commentsReducer = (state = initialState, action) => {
    // console.log('action', action.comments)
    switch (action.type) {
        case LOAD: {
            return [
                ...action.comments,
            ]
        }
        default:
            return state;
    }
}

export default commentsReducer;
