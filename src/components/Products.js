import React, { useState } from 'react';
import { connect } from 'react-redux';
import { NavLink,Route,Redirect} from 'react-router-dom';
import Details from './Details';
import Item from './Item';
import style from './Products.module.css';
import NewProductModal from '../common/NewProductModal';
import logo from '../img/Garmonia.png';
import zrost from '../img/zrost.png';
import spad from '../img/spad.png';
import Abc from '../img/Abc.png';


const Products= (props) => {
    let modalSubmit = (newProductData) => {
        console.log('SUBMIT')
        setShowing(false)
        props.addProduct(newProductData)
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
        <div>
            <div>
                <NavLink to={'/products'}><h1 className={style.headerName}><img className={style.logoImg} src={logo}/></h1></NavLink>
                <hr/>
                <div className={style.mainContentWrapper}>
                    <div className={style.filtersContainer}>
                        <div className={style.filtersContent}>
                            <h3>Фільтри</h3>
                            <hr/>
                            <button onClick={props.Increase}>Зростання <img src={zrost}/></button>
                            <button onClick={props.Decrease}>Спадання <img src={spad}/></button>
                            <button onClick={props.Alphabet}>За іменем <img src={Abc}/></button>
                        </div>
                    </div>
                    <div className={style.allProducts}>
                        { props.products.map((p) => {
                                return <Item key={p.id} p={p} deleteProduct={props.deleteProduct}/>
                            })
                        }
                        
                    </div>
                    <div className={style.NewProductButtonWrapper}>
                        <button onClick={showModal}>+ New</button>
                    </div>
                </div>
               
            </div>
            <NewProductModal products={props.products} title="Додавання нового продукту" modalText="Ви справді хочете додати новий продукт? Натисніть  кнопку Скасувати, щоб скасувати додавання нового продукту. Натисніть кнопку Підтвердити, щоб додати новий продукт"  isOpen={isOpen} modalSubmit={modalSubmit} modalCancel={modalCancel} showModal={showModal}/>
            
        </div>
        
    )
}

let mapStateToProps = (state) =>({
    products: state.itemReducer.products,
    isSortCount: state.itemReducer.isSortCount,
});
let mapDispatchToProps = (dispatch) =>{
    return {
        deleteProduct: (id) => dispatch({ type: 'DELETE_PRODUCT', id }),
        addProduct: (newProductData) => dispatch({ type: 'ADD_PRODUCT',newProductData}),
        setSortCount: (isSortCount) => dispatch({ type: 'SORT_COUNT',isSortCount}),
        Increase: () =>dispatch({type: 'INCREASE'}),
        Decrease: () =>dispatch({type: 'DECREASE'}),
        Alphabet: () =>dispatch({type: 'ALPHABET'}),
      }
}
let ProductsContainer = connect(mapStateToProps,mapDispatchToProps)(Products)

export default React.memo(ProductsContainer);