import React from 'react';
import { connect } from 'react-redux';
import { NavLink,Route} from 'react-router-dom';
import style from './Products.module.css';

const Details= (props) => {
    return(
        <div>
            <h1>Деталі</h1>
            <div>
                    {props.products.map((p) => {
                       return <div className={style.productWrapper}>
                           <div className={style.product}>
                           <div className={style.imgWrapper}><img width="200px" height="200px" src={p.imageUrl}/></div>
                            
                            <div className={style.info}>
                            <button >edit</button>
                            <div>{p.name}</div>
                            <div>Кількість: {p.count}</div>
                            <div>Вага: {p.weight}</div>
                            <div>Опис: {p.detailInfo}</div>
                            </div>
                           </div>
                            
                        </div>
                        
                    })}
                    
                </div>
        </div>
    )
}

let mapStateToProps = (state) =>({
    products: state.itemReducer.products,
});
let mapDispatchToProps = (dispatch) =>{
    return {
       
      }
}
let DetailsContainer = connect(mapStateToProps,mapDispatchToProps)(Details)

export default DetailsContainer;