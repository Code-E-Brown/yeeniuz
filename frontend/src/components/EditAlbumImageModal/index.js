import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditAlbumImageForm from './EditAlbumImageForm'


function EditAlbumImageModal({ specificSongId }) {
    const [showModal, setShowModal] = useState(false);

    const closeModal = () => {
        setShowModal(false)
    }

    return (
        <>

            <button onClick={() => setShowModal(true)}>Edit</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditAlbumImageForm specificSongId={specificSongId} closeModal={closeModal} />
                </Modal>
            )}
        </>
    );
}

export default EditAlbumImageModal;
