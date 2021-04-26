import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Badge, Table,Button } from "reactstrap";
import * as cartAcitons from "../../redux/actions/cartActions";
import alertify from "alertifyjs"

class CartDetail extends Component {

    removeFromCart(product){

        this.props.actions.removeFromCart(product)
        alertify.error(product.productName + " sepetten silindi.")
    }

  render() {
    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Unite Price</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map((cartItem) => (
              <tr key={cartItem.product.id}>
                <th scope="row">{cartItem.product.id}</th>
                <td>{cartItem.product.productName}</td>
                <td>{cartItem.product.unitPrice}</td>
                <td>{cartItem.product.quantity}</td>
                <td>
                  <Button
                    onClick={() => this.removeFromCart(cartItem.product)}
                    color="danger">
                    Sil
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

//State e bağlanmak için
function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
  };
}

//actionu kullanmak için
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeFromCart: bindActionCreators(cartAcitons.removeFromCart, dispatch),
    },
  };
}

//State i proplara aktarıtoruz.
export default connect(mapStateToProps, mapDispatchToProps)(CartDetail);
