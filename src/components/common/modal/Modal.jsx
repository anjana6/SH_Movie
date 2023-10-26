import React, { useRef, useState } from 'react'
import './modal.scss'

const Modal = (props) => {
    const [active, setActive] = useState(false);
    return (
        <div id={props.id} className={`modal ${active ? 'active' : ''}`}>{props.children}</div>
    )
}

const ModalContent = props => {
    const contentRef = useRef(null);

    const closeModal = () => {
        contentRef.current.parentNode.classList.remove('active')
        if (props.onClose) props.onClose()
    }

    return (
        <div ref={contentRef} className='modal_content'>
            {props.children}
            <div className='modal_content_close' onClick={{ closeModal }}>
                <i className='bx bx-x'></i>
            </div>
        </div>
    )
}

export default Modal