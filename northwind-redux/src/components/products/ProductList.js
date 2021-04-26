import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Badge, Table,Button } from "reactstrap";
import * as productActions from "../../redux/actions/productActions";
import * as cartAcitons from "../../redux/actions/cartActions";
import alertify from "alertifyjs"

class ProductList extends Component {
  componentDidMount() {
    this.props.actions.getProducts();
  }
  addToCart = (product) => {

    this.props.actions.addToCart({quantity:1,product})
    alertify.success(product.productName + " sepete eklendi.")

  }

  render() {
    return (
      <div>
        <h3>
          <Badge color="warning">Products</Badge>
          <Badge color="success">
            {this.props.currentCategory.categoryName}
          </Badge>
          </h3>
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>Unite Price</th>
                <th>Quantity Per Unit</th>
                <th>Units In Stock</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.props.products.map(product =>(
                <tr key = {product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.productName}</td>
                <td>{product.unitPrice}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitsInStock}</td>
                <td>
                  <Button onClick={()=>this.addToCart(product)} color="success">Ekle</Button>
                </td>
              </tr>
              ))}
            </tbody>
          </Table>
        
      </div>
    );
  }
}

//State bağlama
function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    products: state.productListReducer,
  };
}

//Action bağlama
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
      addToCart : bindActionCreators(cartAcitons.addToCart,dispatch)
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);