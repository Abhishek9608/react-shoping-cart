import React, { Component } from "react";
import { connect } from "react-redux";
import SingleItem from "../components/SingleItem";
import { addToCart } from '../redux/action';

class Products extends Component {
  constructor(props){
    super(props)
    this.state={
      option:'',
      allProduct:[]
    }
  }

  componentDidMount(){
    let {id}=this.props.match?this.props.match.params:''
    let {allProduct}=this.props
    if(id!==""){
      let item=allProduct.find(ele=>ele.id==id)
      this.setState({
        allProduct:[...this.state.allProduct,item]
      })
    }
    
    if(!id){
      this.setState({
        allProduct:[...allProduct]
      })
    }
  }

  componentWillReceiveProps(){
    let {id}=this.props.match?this.props.match.params:''
    let {allProduct}=this.props
    if(id!==""){
      let item=allProduct.find(ele=>ele.id==id)
      this.setState({
        allProduct:[...this.state.allProduct,item]
      })
    }
    
    if(!id){
      this.setState({
        allProduct:[...allProduct]
      })
    }
  }

  handleChange=(e)=>{
    this.setState({
      option:e.target.value
    })
  }

  render() {
    console.log(this.state)
    const {allProduct}=this.state
    const {addToCart}=this.props;
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

export default connect(mapStateToProps, mapDispatchToProps)(Products);
