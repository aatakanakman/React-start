import React, { Component } from "react";
import { Table, Button } from "reactstrap";

export default class CardList extends Component {
  renderCart() {
    return (
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Category Id</th>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>Units In Stock</th>
            <th>Quantity</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {this.props.cart.map((cardItem) => (
            <tr key={cardItem.product.id}>
              <td>{cardItem.product.id}</td>
              <td>{cardItem.product.categoryId}</td>
              <td>{cardItem.product.productName}</td>
              <td>{cardItem.product.unitPrice}</td>
              <td>{cardItem.product.unitsInStock}</td>
              <td>{cardItem.quantity}</td>
              <td>
                <Button
                  color="warning"
                  onClick={() => this.props.removeFromCard(cardItem.product)}
                >
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }

  render() {
    return <div>{this.renderCart()}</div>;
  }
}
