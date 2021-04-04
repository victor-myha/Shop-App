import React from 'react';
import ItemContainer from './Item';
import { connect } from 'react-redux';
import { NavLink,Route} from 'react-router-dom';
import Details from './Details';
import Item from './Item';
import style from './Products.module.css';


const Products= (props) => {
    
    return(
        <div>
            <div>
                <h1 className={style.headerName}>Загальна Сторінка</h1>
                <button onClick={props.addProduct}>+ New</button>
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
        addProduct: () => dispatch({ type: 'ADD_PRODUCT'}),
        setSortCount: (isSortCount) => dispatch({ type: 'SORT_COUNT',isSortCount}),
        Increase: () =>dispatch({type: 'INCREASE'}),
        Decrease: () =>dispatch({type: 'DECREASE'}),
        Alphabet: () =>dispatch({type: 'ALPHABET'}),
      }
}
let ProductsContainer = connect(mapStateToProps,mapDispatchToProps)(Products)

export default React.memo(ProductsContainer);