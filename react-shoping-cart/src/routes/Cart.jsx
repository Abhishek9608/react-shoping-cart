import React, { Component } from "react";
import { connect } from "react-redux";
import {addToOrder} from "../redux/action";

class Cart extends Component {
  constructor(props){
    super(props)
    this.state={
      name:''
    }
  }

  handleChange=(e)=>{
    this.setState({
      name:e.target.value
    })
  }

  render() {
    const {cartArray,addToOrder}=this.props;
    console.log(cartArray)
    return (
      <div>
        <div>
          <label>Name : </label>
          <input type='text' onChange={this.handleChange} />
          <button className="btn btn-outline-secondary" onClick={()=>addToOrder({name:this.state.name,data:cartArray})}>Place order</button>
        </div>
        {
          cartArray && cartArray.map((data,index)=>{
            return(
                <div key={index} className="card" style={{width: '18rem'}}>
                  <img src={data.img} className="card-img-top" alt={data.name} />
                  <div className="card-body">
                      <h5 className="card-title">{data.name}</h5>
                  </div>
                  <ul className="list-group list-group-flush">
                      <li className="list-group-item">Type : {data.type}</li>
                      <li className="list-group-item">Price : {data.price}</li>
                  </ul>
              </div>
            )
          })
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cartArray: state.cartArray,
});

const mapDispatchToProps = (dispatch) => ({
  addToOrder:(payload)=>dispatch(addToOrder(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);