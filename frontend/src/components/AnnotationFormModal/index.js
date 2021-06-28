import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import AnnotationForm from './AnnotationForm'


function AnnotationFormModal({ selection, fullLine, songId }) {
    const [showModal, setShowModal] = useState(true);

    const closeModal = () => {
        setShowModal(false)
    }

    return (
        <>

            {/* <button onClick={() => setShowModal(true)}>Edit</button> */}
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <AnnotationForm closeModal={closeModal} selection={selection} fullLine={fullLine} songId={songId} />
                </Modal>
            )}
        </>
    );
}

export default AnnotationFormModal;
