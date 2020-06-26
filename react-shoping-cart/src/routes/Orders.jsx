import React, { Component } from "react";
import { connect } from "react-redux";

class Orders extends Component {
  constructor(props){
    super(props)
  }
  render() {  
    const {orderArray}=this.props
    console.log(orderArray)
    return(
      <div>
        {
          orderArray && orderArray.map((ele,index)=>{
            return(
              <div key={index}>
                 <div>
                      <label>Name :{ele.name} </label>
                    </div>
                    {
                      ele.data && ele.data.map((data,index)=>{
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
            )
          })
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    orderArray: state.orderArray,
  }
};

export default connect(mapStateToProps, null)(Orders);
