import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { NavLink,Route} from 'react-router-dom';
import style from './Products.module.css';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import EditModal from '../common/EditModal';

const Details = (props) => {
  let productId = props.match.params.productId;
  const [isOpen, setShowing] = useState(false)
  
    useEffect(() => {
        props.productIdDetailsPage(productId)
    },[props.productDetailsPage])
    let modalSubmit = (editProductData) => {
        console.log('SUBMIT')
        setShowing(false)
        props.editProduct(editProductData)
    }
    let modalCancel = () => {
        console.log('Cancel')
        setShowing(false)
    }
    let showModal = () => {
        setShowing(true)
        console.log('Show modal');
    }

    return(
        <>
            <h1>Деталі</h1>
            <div>
                    {props.productDetailsPage.map((p) => {
                       return <div className={style.productWrapper}>
                           <div className={style.product}>
                           <div className={style.imgWrapper}><img width="200px" height="200px" src={p.imageUrl}/></div>
                            
                            <div className={style.info}>
                            <button onClick={showModal}>Редагувати</button>
                            <div>{p.name}</div>
                            <div>Кількість: {p.count}</div>
                            <div>Вага: {p.weight}</div>
                            <div>Опис: {p.detailInfo}</div>
                            </div>
                           </div>
                            
                        </div>
                        
                    })}
                    <div>Коментарі</div>
                    
                </div>
                {isOpen &&
                    <EditModal productDetailsPage={props.productDetailsPage} title="Додавання нового продукту" modalText="Ви справді хочете додати новий продукт? Натисніть  кнопку Скасувати, щоб скасувати додавання нового продукту. Натисніть кнопку Підтвердити, щоб додати новий продукт"  isOpen={isOpen} modalSubmit={modalSubmit} modalCancel={modalCancel} showModal={showModal}/>
                }
                
        </>
    )
   
}

let mapStateToProps = (state) =>({
    productDetailsPage: state.itemReducer.productDetailsPage,
});
let mapDispatchToProps = (dispatch) =>{
    return {
        productIdDetailsPage: (productId) => dispatch({ type: 'PRODUCT_DETAILS_PAGE', productId }),
        editProduct: (editProductData) => dispatch({ type: 'EDIT_PRODUCT', editProductData }),
    }
}
export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withRouter,
)(Details)