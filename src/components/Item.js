import React, { useState } from 'react';
import style from './Products.module.css';
import { NavLink,Route} from 'react-router-dom';
import Modal from '../common/Modal';

const Item = (props) => {
    let modalSubmit = () => {
        console.log('SUBMIT')
        setShowing(false)
        props.deleteProduct(props.p.id)
    }
    let modalCancel = () => {
        console.log('Cancel')
        setShowing(false)
    }
    let showModal = () => {
        setShowing(true)
        console.log('Show modal');
    }

    const [isOpen, setShowing] = useState(false)
    return(
        <>
        <div className={style.productWrapper}>
            <div className={style.product}>
                <div className={style.imgWrapper}><img  src={props.p.imageUrl}/></div>
                <div className={style.info}>
                    <div className={style.closeBtn}>
                        <span title="Close" onClick={showModal}>x</span>
                    </div>
                    <div>{props.p.name}</div>
                    <div>Кількість: {props.p.count}</div>
                    <div>Вага: {props.p.weight}</div>
                    <div>Короткий опис: {props.p.briefDescription}</div>
                    <NavLink to={'/details'}><button>Деталі</button></NavLink> 
                </div>
            </div>
            
        </div>
        <Modal title="Видалення продукту" modalText="Ви справді хочете видалити продукт зі списку? Це незворотня дія, ви не зможете відновити продукт. Натисніть  кнопку Скасувати, щоб припинити видалення продукту. Натисніть кнопку Підтвердити, щоб остаточно видалити продукт"  isOpen={isOpen} modalSubmit={modalSubmit} modalCancel={modalCancel} showModal={showModal}/>
        </>
    )
}

export default Item;