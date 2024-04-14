import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client';


const ModalComponent = () => {
    return (
        <div>hahhah</div>
    )
};

const Modal = ({ isShow, children }) => {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        setVisible(isShow)
    }, [isShow])

    if (visible) {
        return ReactDOM.createPortal(<div id="modal-root">{children}</div>, document.body)
    }
    return null
}

export const TestModal = () => {
    const [visible, setVisible] = useState(false)

    const handleShow = () => {
        setVisible(true)
    }

    const handleHide = () => {
        setVisible(false)
    }

    const handleShow2 = () => {
        Modal.show()
    }

    return (
        <div>
            <button onClick={handleShow}>
                show
            </button>
            <button onClick={handleHide}>
                hide
            </button>
            <button onClick={handleShow2}>
                show2
            </button>
            <Modal isShow={visible}><ModalComponent /></Modal>
        </div>
    )
}