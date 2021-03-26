import React from 'react';
import Details from './Details';
import { connect } from 'react-redux';
const Item = (props) => {
    return(
        <div>
            <div>
               
            </div>
            <Details/>
        </div>
        
    )
}

let mapStateToProps = (state) =>{

}
let ItemContainer = connect(mapStateToProps,null)(Item)
export default ItemContainer;