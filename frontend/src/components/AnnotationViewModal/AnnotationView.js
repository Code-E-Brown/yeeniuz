import React, { useEffect, useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { getAnnotationsForSong, createPrimaryAnnotationUpvote, deletePrimaryAnnotation } from "../../store/annotations";
import { getSubAnnotationsForSong } from '../../store/subAnnotations'
import { createSubAnnotation, createSubAnnotationUpvote, deleteSubAnnotation } from '../../store/subAnnotations'
import { getOneSong } from '../../store/songs';
import { useHistory } from 'react-router-dom';
import './AnnotatationViewModal.css'
import LoginFormModal from '../LoginFormModal';


function AnnotationView({ sessionUser, annotationId, annotations, closeModal }) {
    let history = useHistory()
    const [newAnnotationText, setNewAnnotationText] = useState('')
    // const [mainAnnotation, setMainAnnotation] = useState('')
    // const [combinedPrimaryAndSub, setCombinedPrimaryAndSub] = useState([])
    // const [upVoteTracker, setUpVoteTracker] = useState(false)

    // const [upVoteColor, setUpVoteColor] = useState("fas fa-angle-double-up fa-2x")
    // console.log(annotationId, annotations)
    const dispatch = useDispatch();
    let selectedAnnotation = annotations.find(annotation => annotation.id === annotationId)
    let currentSongId = annotations[0].songId
    const song = useSelector(state => state.song[currentSongId])
    // console.log('here is your song!!!!', song)
    const songAnnotationsWithInclude = useSelector(state => {
        return Object.values(state.annotations)
    })
    // console.log('YAAAAAAAAAAAAAAAAAAAAAAAA', songAnnotationsWithInclude)
    const subAnnotations = useSelector(state => { //these include upvotes
        return Object.values(state.subAnnotations)
    })
    // console.log("YOOOOOOOOOOOOOOOOOOO", subAnnotations)
    // const [primaryAnnotationWithUpvotes, setPrimaryAnnotationWithUpvotes] = useState(songAnnotationsWithInclude.find(annotation => annotation.id === annotationId))
    let primaryAnnotationWithUpvotes = songAnnotationsWithInclude.find(annotation => annotation.id === annotationId) //these include upvotes
    // let primaryAnnotationWithUpvotes; = songAnnotationsWithInclude.find(annotation => annotation.id === annotationId) //these include upvotes
    // console.log('******', primaryAnnotationWithUpvotes)
    // console.log("******", annotationId, annotations, currentSongId)

    useEffect(() => {
        dispatch(getAnnotationsForSong(currentSongId))
        dispatch(getSubAnnotationsForSong(currentSongId, annotationId))
        // setCombinedPrimaryAndSub([primaryAnnotationWithUpvotes, ...subAnnotations].sort((a, b) => a.Upvotes.length + b.Upvotes.length))

    }, [dispatch])

    // useEffect(() => {
    // }, [dispatch])
    // console.log('*********',primaryAnnotationWithUpvotes)
    // console.log('*************', subAnnotations)
    // console.log('**********', [primaryAnnotationWithUpvotes, ...subAnnotations])

    // console.log("**************", combinedPrimaryandSub)



    const submitButton = async (e) => {
        e.preventDefault()

        const data = {
            newAnnotationText
        }
        // console.log(data)
        await dispatch(createSubAnnotation(data, currentSongId, annotationId))
        await dispatch(getSubAnnotationsForSong(currentSongId, annotationId))
        closeModal()
        // if (data) {
        //     const newSubAnnotation = await dispatch(createSubAnnotation(data))
        // }
    }
    const subAnnotationDelete = async (e) => {
        e.preventDefault()
        await dispatch(deleteSubAnnotation(e.target.id))
        await dispatch(getAnnotationsForSong(currentSongId))
        await dispatch(getSubAnnotationsForSong(currentSongId, annotationId))

    }
    const subUpVoteButton = async (e) => {
        e.preventDefault()
        console.log(e.target.id)
        await dispatch(createSubAnnotationUpvote(e.target.id))
        await dispatch(getAnnotationsForSong(currentSongId))
        await dispatch(getSubAnnotationsForSong(currentSongId, annotationId))

    }

    const primaryUpvoteButton = async (e) => {
        e.preventDefault()
        // setUpVoteTracker(!upVoteTracker)
        await dispatch(createPrimaryAnnotationUpvote(currentSongId, annotationId))
        // await setPrimaryAnnotationWithUpvotes(songAnnotationsWithInclude.find(annotation => annotation.id === annotationId))
        // await dispatch(getAnnotationsForSong(currentSongId))
        // await dispatch(getSubAnnotationsForSong(currentSongId, annotationId))
    }
    const primaryAnnotationDelete = async (e) => {
        // e.preventDefault()
        await dispatch(deletePrimaryAnnotation(currentSongId, annotationId))
        // await dispatch(getOneSong(currentSongId))
        // closeModal()
        // console.log(+currentSongId)
        // history.push(`/songs/${+currentSongId - 1}`)
        // history.push(`/songs/${+currentSongId}`)
        // history.push(`/`)
        // await dispatch(getAnnotationsForSong(currentSongId))
        // await dispatch(getSubAnnotationsForSong(currentSongId, annotationId))

    }



    let combinedPrimaryandSub = [primaryAnnotationWithUpvotes, ...subAnnotations]
    let mainAnnotation;
    if (combinedPrimaryandSub[0]) {
        if (combinedPrimaryandSub[0].Upvotes) {


            combinedPrimaryandSub = combinedPrimaryandSub.sort((a, b) => a.Upvotes.length - b.Upvotes.length).reverse()
            // console.log('YOU DID IT', combinedPrimaryandSub)
            // let sorter = (combinedPrimaryandSub) => {



            let upVoteExists = []
            combinedPrimaryandSub.forEach(annotation => {
                if (annotation.Upvotes.length > 0) {
                    upVoteExists.push(annotation)
                }
            })

            if (!upVoteExists.length) {
                mainAnnotation = primaryAnnotationWithUpvotes
                // console.log('*****asdasdasd', primaryAnnotationWithUpvotes)
                let adjustedArr = []
                combinedPrimaryandSub.forEach(annotation => {
                    if (annotation.id !== mainAnnotation.id) {
                        adjustedArr.push(annotation)
                    }
                })
                combinedPrimaryandSub = adjustedArr
            } else {
                mainAnnotation = combinedPrimaryandSub.shift()
            }
            // console.log("HERES YOUR WINNER", mainAnnotation)
            // console.log("remaininglist", combinedPrimaryandSub)
        }
    }

    // console.log('MAINMAINMAIN', mainAnnotation.Upvotes)
    return (
        <>
            <div className='annotationBox'>
                {sessionUser ?
                    <div>
                        {sessionUser.id === selectedAnnotation.userId ? <a onClick={primaryAnnotationDelete} href={`/songs/${currentSongId}`}>Delete entire annotation?<i className="fas fa-times"></i></a> : null}
                        <div className='mostPopularAnnotationBox'>
                            {(selectedAnnotation?.body === mainAnnotation?.body) && (sessionUser.id === mainAnnotation?.userId) ? (
                                <>
                                    <i onClick={primaryUpvoteButton} style={mainAnnotation?.Upvotes.find(vote => vote.id === sessionUser.id) ? { color: 'green' } : { color: 'black' }} className="fas fa-angle-double-up fa-2x"></i><div className='upVoteCount'>{mainAnnotation?.Upvotes.length}</div>
                                    <div>{mainAnnotation?.body}</div>
                                </>
                            )
                                :
                                selectedAnnotation?.body === mainAnnotation?.body ?
                                    <>
                                        <i id={mainAnnotation?.id} onClick={primaryUpvoteButton} style={mainAnnotation?.Upvotes.find(vote => vote.id === sessionUser.id) ? { color: 'green' } : { color: 'black' }} className="fas fa-angle-double-up fa-2x"></i><div className='upVoteCount'>{mainAnnotation?.Upvotes.length}</div><div>{mainAnnotation?.body}</div>
                                    </>
                                    :
                                    <>
                                        {sessionUser?.id === mainAnnotation?.userId ? <i onClick={subAnnotationDelete} id={mainAnnotation?.id} className="fas fa-times"></i> : null}
                                        <i id={mainAnnotation?.id} onClick={subUpVoteButton} style={mainAnnotation?.Upvotes.find(vote => vote.id === sessionUser.id) ? { color: 'green' } : { color: 'black' }} className="fas fa-angle-double-up fa-2x"></i><div className='upVoteCount'>{mainAnnotation?.Upvotes.length}</div>
                                        <div>{mainAnnotation?.body}</div>
                                    </>
                            }
                        </div>
                        <form>
                            <label className='textAreaLabel'>Add another annotation!</label>
                            <textarea className='annotationTextArea' value={newAnnotationText} onChange={e => setNewAnnotationText(e.target.value)}>
                            </textarea>
                            <button className='textAreaSubmitButton' onClick={submitButton}>Submit Annotation</button>
                        </form>
                        <div>
                            {combinedPrimaryandSub?.map(annotation => (
                                annotation?.body === selectedAnnotation?.body ?
                                    <div className='subAnnotations'>
                                        <i onClick={primaryUpvoteButton} style={annotation?.Upvotes.find(vote => vote.id === sessionUser.id) ? { color: 'green' } : { color: 'black' }} className="fas fa-angle-double-up fa-2x"></i><div className='upVoteCount'>{annotation?.Upvotes.length}</div>
                                        <div>{annotation?.body}</div>
                                    </div>

                                    :
                                    <div className='subAnnotations'>
                                        {sessionUser?.id === annotation?.userId ? <i onClick={subAnnotationDelete} id={annotation?.id} className="fas fa-times"></i> : null}
                                        <i id={annotation?.id} onClick={subUpVoteButton} style={annotation?.Upvotes.find(vote => vote.id === sessionUser.id) ? { color: 'green' } : { color: 'black' }} className="fas fa-angle-double-up fa-2x"></i><div className='upVoteCount'>{annotation?.Upvotes.length}</div>
                                        <div>{annotation?.body}</div>
                                    </div>
                            ))}
                        </div>
                    </div>
                    :
                    <div>
                        <div><h3>Log in to view annotation or add your own!</h3></div>
                    </div>

                }
            </div>

            {/* {sessionUser && mainAnnotation ?
                <div className='annotationBox'>
                    {sessionUser.id === selectedAnnotation.userId ? <a href={`/songs/${currentSongId}`}>Delete entire annotation<i onClick={primaryAnnotationDelete} className="fas fa-times"></i></a> : null}
                    <div className='mostPopularAnnotation'>
                        {sessionUser.id && mainAnnotation.Upvotes ? (
                            <div><i onClick={primaryUpvoteButton} style={mainAnnotation.Upvotes.find(vote => vote.id === sessionUser.id) ? { color: 'green' } : { color: 'black' }} className="fas fa-angle-double-up fa-2x"></i>{mainAnnotation.body}{mainAnnotation.userId === sessionUser.id ? <a href={`/songs/${currentSongId}`}><i onClick={primaryAnnotationDelete} className="fas fa-times"></i></a> : null}</div>
                        ) : (
                            mainAnnotation.body
                        )
                        }
                    </div>
                    <div className='additionalAnnotations'>
                        <form>
                            <label>Add another annotation!</label>
                            <div>:</div>
                            <textarea value={newAnnotationText} onChange={e => setNewAnnotationText(e.target.value)}>
                            </textarea>
                            <button onClick={submitButton}>Submit Annotation</button>
                        </form>
                        {combinedPrimaryandSub && combinedPrimaryandSub.map(annotation => (
                            <div key={annotation.id}>
                                <i id={annotation.id} onClick={subUpVoteButton} style={annotation.Upvotes.find(vote => vote.id === sessionUser.id) ? { color: 'green' } : { color: 'black' }} className="fas fa-angle-double-up fa-2x"></i>
                                {annotation.body}
                                {sessionUser.id === annotation.userId ? <i onClick={subAnnotationDelete} id={annotation.id} className="fas fa-times"></i> : null}
                            </div>
                        ))}
                    </div>
                </div>
                : (
                    <div className='pleaseLogIn'>
                        Please Log In
                    </div>
                )} */}
            {/* //////////////////////////////////// */}
            {/* <div className='annotationBox'>
                <div className='mostPopularAnnotation'>
                    {sessionUser.id === selectedAnnotation.userId ? <a href={`/songs/${currentSongId}`}>Delete entire annotation<i onClick={primaryAnnotationDelete} className="fas fa-times"></i></a> : null}
                    {sessionUser.id && primaryAnnotationWithUpvotes ? (
                        <div><i onClick={primaryUpvoteButton} style={primaryAnnotationWithUpvotes.Upvotes.find(vote => vote.id === sessionUser.id) ? { color: 'green' } : { color: 'black' }} className="fas fa-angle-double-up fa-2x"></i>{selectedAnnotation.body}{<a href={`/songs/${currentSongId}`}><i onClick={primaryAnnotationDelete} className="fas fa-times"></i></a>}</div>
                    ) : (
                        selectedAnnotation.body
                    )
                    }
                </div >
                {
                    sessionUser &&
                    <div>
                        <form>
                            <label>Add another annotation!</label>
                            <div>:</div>
                            <textarea value={newAnnotationText} onChange={e => setNewAnnotationText(e.target.value)}>
                            </textarea>
                            <button onClick={submitButton}>Submit Annotation</button>
                        </form>
                        <div>
                            {subAnnotations && subAnnotations.map(annotation => (
                                <div key={annotation.id}>
                                    <i id={annotation.id} onClick={subUpVoteButton} style={annotation.Upvotes.find(vote => vote.id === sessionUser.id) ? { color: 'green' } : { color: 'black' }} className="fas fa-angle-double-up fa-2x"></i>
                                    {annotation.body}
                                    {sessionUser.id === annotation.userId ? <i onClick={subAnnotationDelete} id={annotation.id} className="fas fa-times"></i> : null}
                                </div>
                            ))}
                        </div>
                    </div>
                }
            </div > */}
        </>
    )
}
export default AnnotationView;
