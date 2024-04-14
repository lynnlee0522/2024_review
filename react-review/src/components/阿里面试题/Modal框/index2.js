import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client';


const ModalComponent = () => {
    return (
        <div>hahhah</div>
    )
};

const Modal = (Component) => {
    const container = document.createElement('div')
    container.setAttribute('id', 'root-modal')
    let root

    const show = () => {
        document.body.appendChild(container)
        root = createRoot(container);
        root.render(<Component />);
    }

    const hide = () => {
        // 这句话可要可不要，下句话一句话全销毁
        root.unmount()
        document.body.removeChild(container)
    }

    return {
        show,
        hide
    }
}

export const TestModal = () => {
    const modal = Modal(ModalComponent)
    const handleShow = () => {
        modal.show()
    }

    const handleHide = () => {
        modal.hide()
    }

    return (
        <div>
            <button onClick={handleShow}>
                show
            </button>
            <button onClick={handleHide}>
                hide
            </button>
        </div>
    )
}