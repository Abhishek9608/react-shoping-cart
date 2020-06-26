import React, { Component } from "react";
import { connect } from "react-redux";
import SingleItem from "../components/SingleItem";
import { addToCart } from '../redux/action';

class Home extends Component {
  constructor(props){
    super(props)
    this.state={
      option:''
    }
  }

  handleChange=(e)=>{
    this.setState({
      option:e.target.value
    })
  }

  render() {
    const {allProduct,addToCart}=this.props;
    return(
      <div className="container row">
        <div>
          <select onChange={this.handleChange}>
            <option value="all">All</option>
            {
              allProduct && allProduct.map((data,index)=>{
                return(
                  <option key={index}>{data.type}</option>
                )
              })
            }
          </select>
        </div>
          {
            allProduct && allProduct.filter(ele=>{
              if(ele.type===this.state.option)
                return true
              if(this.state.option ==='all' || this.state.option ==='')
              return true
            }).map((ele,index)=>{
              return(
                <div key={index} className="col-4 mt-4">
                  <SingleItem  data={ele} addToCart={addToCart} />
                </div>
              )
            })
          }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  allProduct: state.allProduct,
});

const mapDispatchToProps=dispatch=>{
  return{
      addToCart:(payload)=>dispatch(addToCart(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
