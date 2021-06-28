import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditArtistImageForm from './EditArtistImageForm'


function EditArtistImageModal({ id }) {
    const [showModal, setShowModal] = useState(false);

    const closeModal = () => {
        setShowModal(false)
    }

    return (
        <>

            <button onClick={() => setShowModal(true)}>Edit</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditArtistImageForm id={id} closeModal={closeModal} />
                </Modal>
            )}
        </>
    );
}

export default EditArtistImageModal;
