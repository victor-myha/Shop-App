import React, { useState } from 'react';
import ItemContainer from './Item';
import { connect } from 'react-redux';
import { NavLink,Route} from 'react-router-dom';
import Details from './Details';
import Item from './Item';
import style from './Products.module.css';
import NewProductModal from '../common/NewProductModal';

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
                <h1 className={style.headerName}>Загальна Сторінка</h1>
                <button onClick={showModal}>+ New</button>
                <button onClick={props.Increase}>Зростання</button>
                <button onClick={props.Decrease}>Спадання</button>
                <button onClick={props.Alphabet}>За іменем</button>
                <div className={style.allProducts}>
                    { props.products.map((p) => {
                            return <Item p={p} deleteProduct={props.deleteProduct}/>
                        })
                    }
                    
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