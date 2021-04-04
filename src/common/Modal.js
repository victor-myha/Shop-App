import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import s from './Modal.module.css'

class Portal extends React.Component {
    el = document.createElement('div');

    componentDidMount(){
        document.body.appendChild(this.el);
    }
    componentWillUnmount(){
        document.body.removeChild(this.el);
    }
    render(){
        return ReactDOM.createPortal(this.props.children, this.el);
    }
}
const Modal = (props) => {
    
    return(
        <div>
            
            {props.isOpen &&
            <Portal>
            <div className={s.modalOverlay}>
                <div className={s.modalWindow}>
                    <div className={s.modalHeader}>
                        <div className={s.modalTitle}>{props.title}</div>
                        <span title="Close" className={s.modalClose} onClick={props.modalCancel}>X</span>
                    </div>
                    <div className={s.modalBody}>
                        <div className={s.modalText}>{props.modalText}</div>
                    </div>
                    <div className={s.modalFooter}>
                        <button onClick={props.modalSubmit} className={s.Submit}>Підтвердити</button>
                        <button onClick={props.modalCancel} className={s.Cancel}>Скасувати</button>
                    </div>
                </div>
            </div>
            </Portal>
            }
        </div>
        
    )
}
export default Modal;