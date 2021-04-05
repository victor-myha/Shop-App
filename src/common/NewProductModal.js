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
class NewProductModal extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.products.length+1,
            imageUrl: '',
            name: '',
            detailInfo: '',
            briefDescription: '',
            count: null,
            size: '',
            weight: '',
        }
    }
    handleSubmit = (event) =>{
        event.preventDefault();
        console.log('form is submited',this.state)
        this.props.modalSubmit(this.state)
    }
    handleChanges = (event) =>{
        const name = event.target.name;
        this.setState({[name]: event.target.value});
        console.log('something changed',event.target.value)
    }

    render(){
        return(
            <div>
                
                {this.props.isOpen &&
                <Portal>
                <div className={s.modalOverlay}>
                    <div className={s.modalWindow}>
                        <div className={s.modalHeader}>
                            <div className={s.modalTitle}>{this.props.title}</div>
                            <span title="Close" className={s.modalClose} onClick={this.props.modalCancel}>X</span>
                        </div>
                        <div className={s.modalBody}>
                           
                            <form onSubmit={this.handleSubmit}>
                                <input type="text" name="imageUrl" value={this.state.imageUrl} onChange={this.handleChanges} placeholder="Ссилка на фото"/>
                                <input type="text" name="name" value={this.state.name} onChange={this.handleChanges} placeholder="Назва"/>
                                <input type="text" name="detailInfo" value={this.state.detailInfo} onChange={this.handleChanges} placeholder="Детальний опис"/>
                                <input type="text" name="briefDescription" value={this.state.briefDescription} onChange={this.handleChanges} placeholder="Короткий опис"/>
                                <input type="text" name="count" value={this.state.count} onChange={this.handleChanges} placeholder="Кількість в наявності"/>
                                <input type="text" name="size" value={this.state.size} onChange={this.handleChanges} placeholder="Розміри"/>
                                <input type="text" name="weight" value={this.state.weight} onChange={this.handleChanges} placeholder="Вага"/>
                                <div className={s.modalFooter}>
                            <button type="submit" className={s.Submit}>Зберегти</button>
                            <button onClick={this.props.modalCancel} className={s.Cancel}>Скасувати</button>
                        </div>
                            </form>
                            
                        </div>
                        
                    </div>
                </div>
                </Portal>
                }
            </div>
            
        )
    }
    
}
export default NewProductModal;