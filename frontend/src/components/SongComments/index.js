import { getComments } from "../../store/comments"
import { NavLink, Route, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';


export const SongComments = () => {
    const { songId } = useParams();
    const dispatch = useDispatch();
    const comments = useSelector(state => state.comments)

    useEffect(() => {
        dispatch(getComments(songId))
    }, [dispatch])

    // comments.map(comment => (console.log(comment.body)))

    if (comments) {

        return (
            <div>
                <h1>Comments</h1>
                {comments.map(comment => (
                    <div key={comment.id}>
                        {comment.body}
                    </div>
                ))
                }
            </div>

        )
    }
    return null;
}
