import React from 'react';
import ItemContainer from './Item';
import { connect } from 'react-redux';
import { NavLink,Route} from 'react-router-dom';
import Details from './Details';
import style from './Products.module.css';

const Products= (props) => {
    let zrost = props.products;
    let sortZrost = () => {
        props.setSortCount(true);
        let countArr = props.products.map((p) => {
            return p
             
         })
         countArr.sort(function(a, b) {
            return a.count - b.count;
          });
          zrost = countArr
    }
    return(
        <div>
            <div>
                <h1 className={style.headerName}>Загальна Сторінка</h1>
                <button onClick={props.addProduct}>+ New</button>
                <button onClick={sortZrost}>Зростання</button>
                <div className={style.allProducts}>
                    {props.isSortCount 
                    ? zrost.map((sp)=>{
                        return <div className={style.productWrapper}>
                            <div className={style.product}>
                        <div className={style.imgWrapper}><img  src={sp.imageUrl}/></div>
                        <div className={style.info}>
                            <button className={style.closeBtn} onClick={()=>props.deleteProduct(sp.id)}>X</button>
                            <div>{sp.name}</div>
                            <div>Кількість: {sp.count}</div>
                            <div>Вага: {sp.weight}</div>
                        </div>
                        <NavLink to={'/details'}><button>Деталі</button></NavLink> 
                    </div>
                        </div>
                    })
                    : props.products.map((p) => {
                        return <div className={style.productWrapper}>
                            <div className={style.product}>
                                        <div className={style.imgWrapper}><img  src={p.imageUrl}/></div>
                                      <div className={style.info}>
                                      <div className={style.closeBtn}><button  onClick={()=>props.deleteProduct(p.id)}>X</button></div>
                                      <div>{p.name}</div>
                                      <div>Кількість: {p.count}</div>
                                      <div>Вага: {p.weight}</div>
                                      <NavLink to={'/details'}><button>Деталі</button></NavLink> 
                                      </div>
                                  </div>
                        </div>
                          
                      })
                }
                    
                </div>
                
            </div>
            
        </div>
        
    )
}

let mapStateToProps = (state) =>({
    products: state.itemReducer.products,
    isSortCount: state.itemReducer.isSortCount
});
let mapDispatchToProps = (dispatch) =>{
    return {
        deleteProduct: (id) => dispatch({ type: 'DELETE_PRODUCT', id }),
        addProduct: () => dispatch({ type: 'ADD_PRODUCT'}),
        setSortCount: (isSortCount) => dispatch({ type: 'SORT_COUNT',isSortCount}),
      }
}
let ProductsContainer = connect(mapStateToProps,mapDispatchToProps)(Products)

export default React.memo(ProductsContainer);