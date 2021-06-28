import React, { useState, useEffect } from 'react';
import { Modal } from '../../context/Modal';
import AnnotationView from './AnnotationView'


function AnnotationViewModal({ sessionUser, annotations, annotationId }) {
    const [showModal, setShowModal] = useState('true');

    const closeModal = () => {
        setShowModal(false)
    }
    // setShowModal(true)

    return (
        <>

            {/* <button onClick={() => setShowModal(true)}>Viewer</button> */}
            {showModal && (
                <Modal onClose={closeModal}>
                    <AnnotationView sessionUser={sessionUser} closeModal={closeModal} annotations={annotations} annotationId={annotationId} closeModal={closeModal} />
                </Modal>
            )}
        </>
    );
}

export default AnnotationViewModal;
