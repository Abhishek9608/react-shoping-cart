import React, { Component } from "react";
import { connect } from "react-redux";

class Orders extends Component {
  render() {
    console.log(this.props);
    return <div>hii</div>;
  }
}

const mapStateToProps = (state) => ({
  allProduct: state.allProduct,
});

export default connect(mapStateToProps, null)(Orders);
