import React, { Component } from "react";
import { connect } from "react-redux";

class Cart extends Component {
  render() {
    console.log(this.props);
    return <div>hii</div>;
  }
}

const mapStateToProps = (state) => ({
  allProduct: state.allProduct,
});

export default connect(mapStateToProps, null)(Cart);
