import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { NavLink,Route} from 'react-router-dom';
import style from './Products.module.css';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import EditModal from '../common/EditModal';
import s from '../common/Modal.module.css';
import pen from '../img/pen.png';
import logo from '../img/Garmonia.png';
const Details = (props) => {
    let productId = props.match.params.productId;
    const [isOpen, setShowing] = useState(false)
    const [comment, setComment] = useState('')
  
    useEffect(() => {
        props.productIdDetailsPage(productId)
    },[props.productDetailsPage[2]])

    let modalSubmit = (editProductData) => {
        setShowing(false)
        props.editProduct(editProductData)
        console.log('SUBMIT',editProductData)
    }
    let modalCancel = () => {
        setShowing(false)
    }
    let showModal = () => {
        setShowing(true)   
    }
    let handleSubmit = (event) =>{
        event.preventDefault();
        let nowArr = new Date();
        let day = nowArr.getDate() + "." + (nowArr.getMonth()+1) + "." + nowArr.getFullYear();
        let time = nowArr.getHours() + ":" + nowArr.getMinutes();
        let commentsLength = props.productDetailsPage[0].comments.length;
        props.newComment({
            id: commentsLength+1,
            description: comment,
            date: time + " " +day, 
        },productId)
        setComment('')
    }
    let handleChanges = (event) =>{
        // const name = event.target.name;
        setComment(event.target.value);
    }

    return(
        <>
            <NavLink to={'/products'}><h1 className={style.headerName}><img className={style.logoImg} src={logo}/></h1></NavLink>
                <hr/>
            <div>
                    {props.productDetailsPage &&
                     props.productDetailsPage.map((p) => {
                        
                       return <div className={style.productWrapper}>
                           <div className={style.product}>
                           <div ><img width="200px" height="200px" src={p.imageUrl}/></div>
                           
                            <div className={style.info}>
                                <button className={style.editBtn} onClick={showModal}>Редагувати <img src={pen}/></button>
                                <div>{p.name}</div>
                                <div>Короткий опис: {p.briefDescription}</div>
                                <div>Кількість: {p.count}</div>
                                <div>Вага: {p.weight}</div>
                                <div>Розмір: {p.size}</div>
                                <div>Опис: {p.detailInfo}</div>
                            </div>
                           </div>
                            
                        </div>
                        
                    })}
                    <hr/>
                    <div className={s.comWrapper}>
                        
                        <h2>Коментарі</h2>
                        
                        <form className={s.inpWrap} onSubmit={handleSubmit}>
                            <textarea rows="5" cols="50"  type="text" name="description" defaultValue={comment} value={comment}  onChange={handleChanges} placeholder="Коментувати"/>
                            
                            <button type="submit" className={s.Submit}>Надіслати</button>
                        </form>
                        <div>
                            <h3>List of comments</h3>
                            {/* <h3>Усіх Коментів {props.productDetailsPage[0].comments.length &&props.productDetailsPage[0].comments.length }</h3> */}
                            
                            <div>
                                { props.productDetailsPage &&
                                    props.productDetailsPage[0].comments.map((c)=>{
                                        return <div className={s.commentItem}>
                                                <div className={style.closeBtn}>
                                                    <span title="Close" onClick={()=>{props.deleteComment(c.id,productId)}}>x</span>
                                                </div>
                                                <div>{c.description}</div>
                                                <small>{c.date}</small>
                                             </div>
                                     })
                            }
                            </div>
                        </div>

                    </div>
                    
                </div>
                {isOpen &&
                    <EditModal productDetailsPage={props.productDetailsPage} title="Додавання нового продукту" modalText="Ви справді хочете додати новий продукт? Натисніть  кнопку Скасувати, щоб скасувати додавання нового продукту. Натисніть кнопку Підтвердити, щоб додати новий продукт"  isOpen={isOpen} modalSubmit={modalSubmit} modalCancel={modalCancel} showModal={showModal}/>
                }
                
        </>
    )
   
}

let mapStateToProps = (state) =>({
    productDetailsPage: state.itemReducer.productDetailsPage,
    products: state.itemReducer.products,
});
let mapDispatchToProps = (dispatch) =>{
    
    return {
        productIdDetailsPage: (productId) => dispatch({ type: 'PRODUCT_DETAILS_PAGE', productId }),
        editProduct: (editProductData) => dispatch({ type: 'EDIT_PRODUCT', editProductData }),
        newComment: (newComment,productId) => dispatch({ type: 'NEW_COMMENT', newComment,productId }),
        deleteComment: (commentId,productId) => dispatch({ type: 'DELETE_COMMENT', commentId,productId }),
    }
}
export default React.memo(compose(
    connect(mapStateToProps,mapDispatchToProps),
    withRouter,
)(Details)); 