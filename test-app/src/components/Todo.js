import { useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props) {
    // useState azért az állapotért felelős, amit látunk. Ezzel lehet megjeleníteni, eltünteni elementeket
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function deleteHandler() {
        setModalIsOpen(true);
    }

    function closeModalHandler() {
        setModalIsOpen(false);
    }

    return (
        <div className="card">
            <h2>{props.text}</h2>
            <div className="actions">
                <button className="btn" onClick={deleteHandler}>
                    Delete
                </button>
            </div>
            {/* Ez a Modal props.onCancel-je és a props.onConfirm-je. Ha az meghívódik benne, akkor a closeModalHandler függvény fog lefutni */}
            {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />}
            {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
        </div>
    );
}

export default Todo;
