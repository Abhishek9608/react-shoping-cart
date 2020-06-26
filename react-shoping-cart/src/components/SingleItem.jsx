import React, { Component } from "react";
import {Link} from "react-router-dom";
class SingleItem extends Component{
    render(){
    const {data,addToCart}=this.props
    return(
        <div>
             <div className="card" style={{width: '18rem'}}>
                <Link to={`/product/${data.id}`}><img src={data.img} className="card-img-top" alt={data.name} /></Link>
                <div className="card-body">
                    <h5 className="card-title">{data.name}</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Type : {data.type}</li>
                    <li className="list-group-item">Price : {data.price}</li>
                    <li className="list-group-item">
                        <button onClick={()=>addToCart(data.id)} className="btn btn-outline-warning">Add To Cart</button>
                    </li>
                </ul>
            </div>
        </div>
    )
    }
}


export default SingleItem;